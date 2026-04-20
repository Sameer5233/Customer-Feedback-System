# Customer Survey Kiosk System

A modern, professional React.js application for collecting customer feedback in a shop kiosk. Built with Vite, TypeScript, and beautiful UI design.

## ✨ Features

- **Modern UI Design**: Professional survey interface with gradients, shadows, and smooth animations
- **Welcome Screen** with engaging design and start button
- **Dynamic Survey Flow** with 5 questions (4 rating, 1 text types)
- **Visual Progress Bar** showing completion percentage
- **Enhanced Rating System**: 
  - 1-5 scale with satisfaction labels (Poor to Excellent)
  - 1-10 scale for recommendation with descriptive labels
  - Smooth hover effects and visual feedback
- **Navigation**: Previous, Next, Skip with intuitive button styling
- **Session Management**: Unique session IDs with localStorage persistence
- **Confirmation Dialog** with modern modal design
- **Thank You Screen** with success icon and auto-reset
- **Fully Responsive**: Optimized for kiosk, tablet, and mobile devices
- **Accessibility**: Proper focus states, keyboard navigation, and screen reader support

## 🎨 UI/UX Highlights

- **Professional Color Scheme**: Modern gradient backgrounds and consistent color palette
- **Typography**: Inter font for clean, readable text
- **Card-based Layout**: Elevated survey container with shadow effects
- **Interactive Elements**: Hover effects, transitions, and micro-animations
- **Visual Feedback**: Selected states, progress indicators, and status messages
- **Kiosk-Friendly**: Large touch targets, clear typography, and intuitive flow

## 📁 Project Structure

```
src/
├── components/
│   ├── WelcomeScreen.tsx       # Welcome screen with start button
│   ├── QuestionRenderer.tsx    # Dynamic question display
│   ├── RatingComponent.tsx     # Enhanced rating input
│   ├── TextInputComponent.tsx  # Text area input
│   ├── NavigationButtons.tsx   # Survey navigation
│   ├── ThankYouScreen.tsx      # Completion screen
│   └── ConfirmationDialog.tsx  # Submit confirmation
├── data/
│   └── questions.ts            # Survey questions configuration
├── utils/
│   └── localStorage.ts         # Data persistence utilities
├── App.tsx                     # Main application logic
├── App.css                     # Modern styling
├── main.tsx                    # React entry point
└── index.css                   # Global styles
```

## Project Structure

```
src/
├── components/
│   ├── WelcomeScreen.tsx
│   ├── QuestionRenderer.tsx
│   ├── RatingComponent.tsx
│   ├── TextInputComponent.tsx
│   ├── NavigationButtons.tsx
│   ├── ProgressIndicator.tsx
│   ├── ThankYouScreen.tsx
│   └── ConfirmationDialog.tsx
├── data/
│   └── questions.ts
├── utils/
│   └── localStorage.ts
├── App.tsx
├── App.css
├── main.tsx
└── index.css
```

## How It Works

1. **Welcome Screen**: Greets the customer and starts the survey.
2. **Survey Flow**: Displays questions one by one with progress indicator.
3. **Question Types**:
   - Rating: 1-5 or 1-10 scale with large clickable buttons
   - Text: Textarea for open-ended feedback
4. **Navigation**: Previous, Next, Skip buttons. Users can edit previous answers.
5. **Session Management**: Unique session ID stored in localStorage.
6. **Submission**: Confirmation dialog, then marks survey as COMPLETED.
7. **Thank You**: Shows for 5 seconds, then resets to welcome screen.

## Data Structure

### Questions
```typescript
[
  {
    id: number,
    text: string,
    type: "rating" | "text",
    scale?: number
  }
]
```

### LocalStorage
```json
{
  "sessionId": {
    "status": "IN_PROGRESS" | "COMPLETED",
    "answers": {
      "questionId": "answer"
    }
  }
}
```

## Installation & Running Locally

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm run dev
   ```
4. Open http://localhost:5173 in your browser

## Building for Production

```bash
npm run build
```

## Deployment to Vercel

1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Deploy automatically or manually
4. Your app will be live at `https://your-app.vercel.app`

## Technologies Used

- React 18 with TypeScript
- Vite for build tooling
- LocalStorage for data persistence
- CSS for styling

## Suggestions for Improvements

- Add backend API for data persistence
- Implement user authentication
- Add survey analytics dashboard
- Support for more question types (multiple choice, etc.)
- Add animations and transitions
- Implement accessibility features (ARIA labels, keyboard navigation)
- Add form validation
- Support for multiple languages
- Add progress saving on page refresh
- Implement survey branching logic
