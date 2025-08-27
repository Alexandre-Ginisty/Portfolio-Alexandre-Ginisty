@echo off
echo Cleaning up old files...
rmdir /s /q node_modules 2>nul
del package-lock.json 2>nul

echo Installing dependencies...
call npm install next@latest react@latest react-dom@latest
call npm install three @react-three/fiber @react-three/drei
call npm install framer-motion react-intersection-observer
call npm install react-icons react-typed @emailjs/browser
call npm install react-hot-toast react-parallax-tilt lottie-react
call npm install --save-dev typescript @types/react @types/react-dom @types/node
call npm install --save-dev tailwindcss postcss autoprefixer
call npm install --save-dev eslint eslint-config-next

echo Installation complete!
echo Run 'npm run dev' to start the development server
pause
