
**🖼️ AI Image Generation Web App**

An AI-powered image generation web app built with Next.js 15, Tailwind CSS, and shadcn/ui.
This project integrates a free AI Text-to-Image API from Rapid API, enabling users to generate images from text prompts (up to 10 free requests/month).


**🚀 Features**

**🔮 AI Image Generation**

1. Integrates a free Text-to-Image API from Rapid API.

2. Handles API requests using the XS library.

3. Generated images are stored in a React state variable and displayed using the Next.js <Image /> component for optimized, lazy-loaded performance.
   

**🎨 Responsive Design**

1. Dynamic Navbar: Changes background color on scroll using useState, useEffect, and a window scroll listener.

2. Mobile-Friendly: Tailwind CSS utilities ensure responsiveness across devices.

3. Navigation Management: A central navLinks constant (array of { id, url, label }) simplifies link rendering.

   

**⚡ Tech Stack**

**1. Frontend:** Next.js 15

**2. Styling:** Tailwind CSS

**3. UI Components:** shadcn/ui

**4. API Integration:** Rapid API




**🔗 API Integration** This project uses the Text-to-Image Generator API from Rapid API.

1. Sign up at Rapid API

2. Subscribe to the Free Plan (10 requests/month).

3. Obtain your API key.

4. Add it to your project.


   

**📦 Installation**

```bash
# 🚀 Setup AI Image Generation Project with Next.js 15

# 1. Create Next.js 15 project
npx create-next-app@latest ai-image-generation --use-npm --ts --eslint --tailwind

cd ai-image-generation

# 2. Install dependencies
npm install

# 3. Install required libraries
npm install tailwindcss postcss autoprefixer   # Tailwind
npm install @shadcn/ui                        # UI library
npm install @headlessui/react @radix-ui/react-accordion # Accordion for FAQ
npm install lucide-react                      # Icons for UI
npm install next@canary react@latest react-dom@latest   # Ensure Next.js 15 compatibility

# 4. Initialize Tailwind (already done by create-next-app if --tailwind was used)
npx tailwindcss init -p

# 5. Configure Tailwind content paths
sed -i 's/content: \[/content: \[".\/pages\/*.{js,ts,jsx,tsx}", ".\/components\/*.{js,ts,jsx,tsx}", ".\/app\/*.{js,ts,jsx,tsx}"],/' tailwind.config.js

# 6. Setup shadcn/ui
npx shadcn-ui@latest init

# 7. Run dev server
Start the dev server with: npm run dev



