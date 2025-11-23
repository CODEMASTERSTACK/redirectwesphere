WeSphere — Discover the Power Within Your Sphere
📖 About the App

WeSphere is a personality-based interactive app designed to bring people together in a fun, creative, and gamified way.
Each user in WeSphere owns a unique Sphere Card — a digital identity that reflects their strengths, weaknesses, habits, and nature.

The app transforms your social and emotional traits into a beautiful, character-inspired profile — making your personality come alive as a 2D animated character inside a digital universe.

It’s not just an app; it’s a gamified social world where your identity evolves with your actions, choices, and interactions.

🎯 Vision & Purpose

"Everyone has a unique energy — a Sphere — that defines who they are. WeSphere helps you discover, understand, and express it."

The goal of WeSphere is to make self-expression more fun and personalized.
It connects users emotionally by visualizing personalities and allowing interactions in creative ways — through cards, games, and evolving character journeys.

🚀 Core Features
👤 1. Personalized Sphere Profiles

Each user (classmate or friend) has their own profile that includes:

Strengths & Weaknesses

Habits & Personality Traits

Nature & Mood Vibe

2D Character Illustration

Every profile feels like a digital collectible — unique, fun, and deeply personalized.

🪪 2. Sphere Card System

When users sign up, they begin with an Unclaimed Card.
They can “claim” it through an interactive animation that unlocks their Sphere identity.

If they haven’t claimed it yet, they see:

“You haven’t claimed your card yet.”
Once they claim, the animation reveals their card and unlocks full app access.


🔐 4. Authentication System

WeSphere uses:

Supabase Authentication for secure user login and signup via email/Google.

Firebase for data storage, including user cards, profiles, and game progress.

The admin (e.g., kripalsingh.work@gmail.com) has special access to:

Manage user data

Add or update character details

Monitor app activity through a separate Admin Dashboard

🌍 5. Dynamic Content Updates

Even without app updates, WeSphere can dynamically change visuals, content, and features using Firebase Remote Config.
This ensures users always see the latest content, new card designs, and fresh events.

🧩 6. User Engagement System

Claim your Sphere and unlock your identity.

Earn XP by playing games and completing daily tasks.

Collect badges and achievements.

Participate in weekly Sphere Challenges.



⚙️ Technology Stack
Component	Technology Used
Frontend	Flutter (for cross-platform Android/iOS support)
Authentication	Supabase Auth (Email, OAuth, Magic Links)
Database	Firebase Firestore (for user, card, and game data)
Storage	Firebase Storage (for character images and assets)
Admin Dashboard	Built-in Flutter web or custom Firebase Console
Notifications	Firebase Cloud Messaging (FCM)
Analytics & Monitoring	Firebase Crashlytics + Supabase Logs
Animation & UI	Lottie animations, custom vector assets
📲 App Flow

User Login / Signup
Authenticated via Supabase.
If the email matches admin credentials → redirected to Admin Portal, else to User Dashboard.

Unclaimed Card Screen
If cardClaimed == false, show the “Claim Your Sphere” animation and guide user to unlock their card.

Dashboard
Once claimed, users see:

Their Sphere profile

Strengths, weaknesses, nature

Games and leaderboard

Badges and XP progress

Games Section
Users can play short, interactive games to increase their Sphere Energy or unlock features.

Admin Portal
Admins can view user details, update data, and monitor engagement.

🛡️ Security Features

User authentication via Supabase (secure token-based access).

Firebase Firestore rules ensure users only access their own data.

Admin-only actions are protected via role-based access control.

🔔 Notifications

Push notifications inform users about new updates, events, or features.

“New Version Available” prompts users to update the app when a new build is released.

🌌 Future Scope

🌠 AI-Based Personality Analysis:
Auto-generate a Sphere profile based on a few questions or user behavior.

🧙 AR Sphere Experience:
Use camera-based AR to visualize your Sphere in the real world.

🪩 Social Features:
Add comments, interactions, and friendship between users’ spheres.

🎭 Custom Avatars:
Users can design and personalize their character looks.

⚔️ PvP Sphere Battles (Future Game):
Two users challenge each other in quiz or decision-based duels using their Sphere traits.

💡 Core Idea Summary

WeSphere blends personality, design, and play into one app —
where every user’s identity becomes an adventure, not just a profile.