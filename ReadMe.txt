Based on the provided code snippets, here's a brief overview of the project:

*** NOTE : Please Keep Your system on Dark Mode for better experience ***

### Project Overview:
- **Type:** Web application
- **Technology Stack:** React (with Next.js), TypeScript
- **Purpose:** The project appears to be a social media or content sharing platform, possibly resembling an Instagram-like application.
- **Key Features:** The project implements various components and utilities to support features such as displaying reels or videos, liking content, saving content, sharing content on social media platforms, and interacting with comments.

### Components:
1. **Reels Component:**
   - Renders reels or videos with associated metadata such as profile information, description, song cover, likes, and comments.
   - Allows users to like content and view comments.

2. **Like Button Component:**
   - Provides a button for users to like or unlike content.
   - Displays the count of likes and updates it accordingly.

3. **Save Button Component:**
   - Provides a button for users to save or unsave content.
   - Allows users to toggle the save status of content.

4. **Share Component:**
   - Allows users to share content on various social media platforms such as WhatsApp, Twitter, LinkedIn, and Email.
   - Provides options for users to share the content's URL along with a customized message.

5. **Comments Component:**
   - Facilitates viewing, adding, editing, and liking comments on reels or videos.
   - Allows users to reply to existing comments.
   - Supports features such as debounced comment input, random comment ID generation, and comment formatting.

### Utilities:
1. **Debounce Function:**
   - Used for debouncing user input in comment sections to improve performance by reducing unnecessary function calls.

2. **Random Number Generator:**
   - Generates random numbers with a specified number of digits, primarily used for generating unique comment IDs.

3. **Number Formatting Function:**
   - Formats large numbers to a more readable format (e.g., 1.5m for 1,500,000).

4. ** Icons In Sngle File: **
    - Here All the Icons are stored in single file "Icons.ts"
