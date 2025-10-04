# Skillzo - AI Career Assistant Integration

A comprehensive platform for high school students featuring integrated AI career guidance and mentorship opportunities.

##  AI Chatbot Integration

This repository contains the complete Skillzo website with an integrated AI Career Assistant chatbot that provides personalized career guidance to students.

### Features

- ** Floating Chatbot Button**: Simple, low-key button in bottom-right corner of all pages
- ** AI Career Assistant**: Intelligent chatbot providing career guidance and advice
- ** Responsive Design**: Works seamlessly on desktop and mobile devices
- ** Seamless Integration**: Embedded iframe integration with the main Skillzo site
- ** Fast Performance**: Optimized for quick loading and smooth user experience

### Architecture

```

             Skillzo Main Site               
            (localhost:3000)                 
                                             
     
          Floating Chat Button            
       (Bottom-right corner)              
     
                                            
                                            
     
           /chatbot Route                 
      (Iframe Integration)                
                                          
          
        AI Career Assistant            
       (localhost:3001)                
                                       
       Career Guidance                
       Personalized Advice            
       Interactive Chat               
          
     

```

##  Getting Started

### Prerequisites

- Node.js 16+ 
- pnpm (recommended) or npm
- Your AI chatbot running on port 3001

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Shreyanshdiwakar/skillzo-new-site-with-bot.git
   cd skillzo-new-site-with-bot
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   ```

4. **Start your AI chatbot** (on port 3001)
   ```bash
   # In your chatbot directory
   PORT=3001 npm run dev
   ```

5. **Access the site**
   - Main site: http://localhost:3000
   - Chatbot integration: http://localhost:3000/chatbot

##  Chatbot Integration Details

### Floating Button Component
- **Location**: `apps/next/src/components/floating-chatbot.tsx`
- **Design**: Simple yellow circular button with chat icon
- **Behavior**: Appears 1 second after page load, fixed positioning
- **Styling**: Minimal hover effects, no animations for low-key appearance

### Chatbot Page
- **Location**: `apps/next/src/app/chatbot/page.tsx`
- **Integration**: Full-screen iframe embedding your chatbot
- **Features**: 
  - Responsive height adjustment
  - Loading state management
  - Professional header and footer
  - Feature highlights and support links

### Layout Integration
- **Location**: `apps/next/src/app/layout.tsx`
- **Implementation**: FloatingChatbot component added to global layout
- **Scope**: Appears on all pages across the site

##  Configuration

### Chatbot URL Configuration
To change the chatbot URL, update the iframe src in:
```typescript
// apps/next/src/app/chatbot/page.tsx
<iframe
  src='http://localhost:3001'  // Change this URL
  // ... other props
/>
```

### Styling Customization
The floating button can be customized in:
```typescript
// apps/next/src/components/floating-chatbot.tsx
className="block w-12 h-12 bg-yellow-400 hover:bg-yellow-500 rounded-full shadow-sm flex items-center justify-center"
```

##  Project Structure

```
skillzo-new-site-with-bot/
 apps/
    next/                    # Main Next.js application
        src/
           app/
              chatbot/     # Chatbot integration page
                 page.tsx
              layout.tsx   # Global layout with chatbot
              ...
           components/
               floating-chatbot.tsx  # Floating button
               navbar.tsx            # Updated navbar
               ...
 packages/                    # Shared packages
 package.json
 README.md
```

##  User Experience Flow

1. **Discovery**: Students visit any page on Skillzo
2. **Notice**: Floating chatbot button appears in bottom-right corner
3. **Access**: Click button to navigate to `/chatbot` page
4. **Interact**: Full-screen chatbot interface loads
5. **Navigate**: Return to main site or continue chatting

##  Development

### Adding New Features
- Chatbot features: Modify your separate chatbot application
- Site features: Add to the Next.js application in `apps/next/`
- Integration: Update iframe src or floating button as needed

### Customization
- **Colors**: Update Tailwind classes in components
- **Positioning**: Modify the `fixed bottom-6 right-6` classes
- **Size**: Adjust `w-12 h-12` classes for button size

##  Deployment

### Production Deployment
1. **Build the application**
   ```bash
   pnpm build
   ```

2. **Deploy your chatbot** to a production URL

3. **Update chatbot URL** in `apps/next/src/app/chatbot/page.tsx`

4. **Deploy to your hosting platform** (Vercel, Netlify, etc.)

### Environment Variables
Set up environment variables for production:
```bash
NEXT_PUBLIC_CHATBOT_URL=https://your-chatbot-domain.com
```

##  Mobile Experience

The chatbot integration is fully responsive:
- Floating button scales appropriately on mobile
- Iframe adjusts to mobile viewport
- Touch-friendly interface
- Optimized loading for mobile networks

##  Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

##  Support

For technical support or questions about the chatbot integration:
- Create an issue in this repository
- Contact the development team
- Check the original Skillzo documentation

##  License

This project is licensed under the same terms as the original Skillzo project.

---

Built with  for the next generation of ambitious teens.
