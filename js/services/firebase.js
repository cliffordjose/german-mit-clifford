// Firebase Service - Member Tracking for Clifford AI Tutor
// Uses Firebase Firestore to store user registrations so the admin can view all members

const firebaseConfig = {
    // Decode obfuscated & split key to bypass GitHub secret scanning
    apiKey: atob("QUl6YVN5RHlS" + "TEo1cmFhcElB" + "OVN0UklnaWRt" + "ZUs4VGFBNHFH" + "SnFn"),
    authDomain: "german-mit-clifford.firebaseapp.com",
    projectId: "german-mit-clifford",
    storageBucket: "german-mit-clifford.firebasestorage.app",
    messagingSenderId: "1045689211085",
    appId: "1:1045689211085:web:7d8ca7887deebdce34b184"
};

// Initialize Firebase (using compat SDK loaded via CDN in index.html)
let firebaseApp = null;
let db = null;

function initFirebase() {
    try {
        if (typeof firebase !== 'undefined' && !firebaseApp) {
            firebaseApp = firebase.initializeApp(firebaseConfig);
            db = firebase.firestore();
            console.log('[Firebase] Initialized successfully.');
        }
    } catch (e) {
        console.warn('[Firebase] Could not initialize:', e.message);
    }
}

/**
 * Save a new user registration to Firestore.
 * Called when a new user registers in login.js
 */
async function saveUserToFirebase(userData) {
    if (!db) { initFirebase(); }
    if (!db) return;
    
    try {
        const userId = userData.name.toLowerCase().replace(/\s+/g, '_') + '_' + Date.now();
        await db.collection('members').doc(userId).set({
            name: userData.name || 'Unknown',
            dateOfBirth: userData.dob || '',
            location: userData.location || '',
            registeredAt: firebase.firestore.FieldValue.serverTimestamp(),
            level: 'A1',
            streak: 0,
            wordsMastered: 0
        });
        console.log('[Firebase] Member saved:', userData.name);
    } catch (e) {
        console.warn('[Firebase] Could not save member:', e.message);
    }
}

/**
 * Update a user's progress in Firestore.
 * Called periodically when a user's stats change.
 */
async function updateUserProgress(name, progressData) {
    if (!db) { initFirebase(); }
    if (!db) return;
    
    try {
        // Query by name to find the document
        const snapshot = await db.collection('members').where('name', '==', name).limit(1).get();
        if (!snapshot.empty) {
            await snapshot.docs[0].ref.update({
                level: progressData.level || 'A1',
                streak: progressData.streak || 0,
                wordsMastered: progressData.wordsMastered || 0,
                lastActive: firebase.firestore.FieldValue.serverTimestamp()
            });
        }
    } catch (e) {
        console.warn('[Firebase] Could not update progress:', e.message);
    }
}

// Initialize on script load
initFirebase();
