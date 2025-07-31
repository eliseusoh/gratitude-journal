## 🌟 Gratitude Journal
A simple React app to help you track what you’re grateful for, every day!

<img width="1917" height="929" alt="image" src="https://github.com/user-attachments/assets/9692115f-6178-483b-a58d-4441eba2afaa" />


---

## 🚀 Features
- Add your gratitude entries with a friendly form
- See your list of past entries (newest first)
- Entries are saved in your browser (local storage)
- Beautiful, soft UI with custom CSS

--- 
 
## 🛠️ Tech Stack
- React (with hooks)
  - useState for managing entries and input
  - useEffect for syncing with local storage
- Functional Components
  - App.js – main logic
  - GratitudeForm.js – input form
  - EntryList.js – shows your entries
- Controlled Inputs in Forms for smooth typing
- Conditional Rendering (shows a message if no entries yet)
- Props & Lifting State Up for clean data flow
- CSS Styling for a cozy look
- map() - to render entries dynamically
- Custom components 

## 💡 How it Works
- Add Entry:
  - Fill the form and submit. The entry is added to the top of the list.

- Persistence:
  - All entries are stored in your browser’s local storage. They’ll still be there next time you visit!

- No entries yet?
  - You’ll see a friendly message and a sprout emoji 🌱

## 📝 How to Use
1. Install dependencies:
```bash
npm install
```

2. Start the app:
```bash
npm start
```

3. Add what you’re grateful for!
- Type in the box and hit “Add ✨”
- Your entry appears at the top
- Entries are saved automatically


🙏 Enjoy your gratitude journey!
