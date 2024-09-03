# Berbere
This innovative cooking and recipes app is designed to help users discover, create, and share delicious recipes from around the world, with a special focus on Ethiopian cuisine

## Features

- **Extensive Recipe Database:** Explore a diverse collection of recipes, including traditional Ethiopian dishes such as injera, doro wat, and kitfo, as well as recipes from various global cuisines. Easily filter recipes by cuisine, dietary needs, preparation time, and more.
- **Meal Planner:** Plan your weekly meals, generate shopping lists, and track nutritional information to make meal planning efficient and enjoyable.
- **Interactive Community:** Share your favorite recipes, participate in cooking challenges, and connect with fellow home cooks who have a passion for Ethiopian and international cuisine.
- **Personalized Recommendations:** Receive recipe suggestions tailored to your taste preferences and cooking history, with a special focus on Ethiopian flavors and ingredients.
- **Tutorials and Videos:** Access step-by-step cooking videos and expert tips from professional chefs, featuring both traditional Ethiopian cooking techniques and global culinary skills.

## Getting Started

To get started with Berbere, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   
2. ## Install Dependencies

Before you can run the app, you need to install the required dependencies. Follow the instructions for your specific platform below:

1. **Install Dependencies for Web:**

   - Open a terminal and navigate to the project directory:

     ```bash
     cd your-repo-name
     ```

   - Install the required npm packages:

     ```bash
     npm install
     ```

2. **Install Dependencies for iOS:**

   - Navigate to the iOS project directory (typically located in the `ios` folder):

     ```bash
     cd ios
     ```

   - Install CocoaPods dependencies:

     ```bash
     pod install
     ```

   - Return to the root project directory:

     ```bash
     cd ..
     ```

3. **Install Dependencies for Android:**

   - Navigate to the Android project directory if necessary (typically managed from the root):

     ```bash
     cd android
     ```

   - Build the project and download necessary Gradle dependencies:

     ```bash
     ./gradlew build
     ```

   - Return to the root project directory:

     ```bash
     cd ..
     ```

By following these steps, you ensure that all necessary packages and dependencies are installed, allowing you to proceed with running and developing your app.


## Set Up Firebase

Follow these steps to integrate Firebase with your project:

1. **Create a Firebase Project:**

   - Navigate to the [Firebase Console](https://console.firebase.google.com/).
   - Click on **"Add project"** and follow the prompts to set up a new Firebase project. You’ll need to name your project and agree to the terms of service.

2. **Add Firebase to Your App:**

   - In the Firebase Console, select your newly created project.
   - Click on the gear icon next to **"Project Overview"** and select **"Project settings"** from the dropdown menu.

   - **For Android:**
     1. Under **"Your apps"**, click on the Android icon.
     2. Register your app with a package name (e.g., `com.example.yourapp`).
     3. Download the `google-services.json` file when prompted.
     4. Place the `google-services.json` file in your Android app’s `app/` directory.

   - **For iOS:**
     1. Under **"Your apps"**, click on the iOS icon.
     2. Register your app with an iOS bundle ID (e.g., `com.example.yourapp`).
     3. Download the `GoogleService-Info.plist` file when prompted.
     4. Place the `GoogleService-Info.plist` file into your Xcode project using Xcode’s file import feature (drag it into the root of the project navigator).

3. **Install Firebase SDKs:**

   - **For Web:**
     ```bash
     npm install firebase
     ```

   - **For Android:**
     - Add the Firebase SDK to your `build.gradle` files:
       ```gradle
       // Project-level build.gradle
       classpath 'com.google.gms:google-services:4.3.14'

       // App-level build.gradle
       implementation 'com.google.firebase:firebase-core:21.2.0'
       ```

     - Apply the Google services plugin in your `app/build.gradle`:
       ```gradle
       apply plugin: 'com.google.gms.google-services'
       ```

   - **For iOS:**
     - Add Firebase to your `Podfile`:
       ```ruby
       pod 'Firebase/Core'
       ```

     - Run the following command to install the pods:
       ```bash
       pod install
       ```

4. **Configure Firebase Services:**

   - **Authentication:** Set up authentication methods in the Firebase Console under the **"Authentication"** section.
   - **Firestore Database:** Create a Firestore database for storing and managing recipes and user data under the **"Firestore Database"** section.
   - **Storage:** Use Firebase Storage to store and retrieve images and videos. Set this up in the **"Storage"** section of the Firebase Console.

By following these steps, you will integrate Firebase services into your app, enabling powerful features like real-time databases, authentication, and cloud storage.

    
