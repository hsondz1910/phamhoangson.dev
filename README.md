# phamhoangson.dev

## Important Notes for This Project

### 1. Tech Stack & Structure
- **Frontend:** React + TypeScript, sử dụng Vite cho phát triển và build.
- **UI Framework:** Tailwind CSS (tùy biến mạnh qua tailwind.config.js).
- **Animation:** framer-motion cho animation, react-parallax-tilt cho hiệu ứng 3D nhẹ.
- **Icons:** lucide-react và react-icons.
- **Project structure:**
  - `src/components/sections/`: Các section lớn của trang (Hero, About, Skills, Projects, Experience, Certifications, Contact).
  - `src/data/portfolioData.ts`: Dữ liệu động cho các section (skills, projects, experience...).
  - `src/types/`: Định nghĩa type cho dữ liệu.
  - `public/files/`: Chứa file CV, tài liệu tĩnh.

### 2. Customization & Theming
- **Tùy biến màu sắc:**
  - Tất cả màu sắc được định nghĩa trong `tailwind.config.js` (primary, accent, neutral).
  - Dễ dàng đổi theme toàn bộ site chỉ bằng cách chỉnh file này.
- **Dark mode:**
  - Hỗ trợ dark mode tự động, đồng bộ màu sắc, không bị lỗi màu.

### 3. Performance & UX
- **Tối ưu hiệu năng:**
  - Tránh các hiệu ứng 3D/animation nặng ở các section nhiều item (Skills, Projects).
  - Chỉ dùng animation nhẹ, hover, hoặc 3D cho card quan trọng (About, Education).
- **Responsive:**
  - Giao diện responsive, tối ưu cho cả desktop và mobile.

### 4. Data-driven UI
- **Dễ mở rộng:**
  - Thêm/sửa/xóa project, skill, experience chỉ cần chỉnh file data, không cần sửa code UI.
- **TypeScript strict:**
  - Dữ liệu luôn được kiểm tra type, tránh lỗi runtime.

### 5. Build & Deploy
- **Build:**
  - Sử dụng lệnh `npm run build` để build production.
- **Deploy:**
  - Có thể deploy lên Vercel, Netlify, GitHub Pages hoặc bất kỳ static hosting nào.
- **Assets:**
  - Ảnh, file tĩnh để trong `public/` hoặc `src/assets/`.

### 6. Editor & Dev Experience
- **Nên dùng VSCode với Tailwind CSS IntelliSense** để code nhanh, không lỗi lặt vặt.
- **Linter:**
  - Đã cấu hình ESLint, nên chạy `npm run lint` trước khi commit.

### 7. Cảnh báo & Lưu ý
- **Không sửa trực tiếp các class Tailwind trong node_modules.**
- **Nếu đổi cấu trúc dữ liệu, phải cập nhật type trong `src/types/`.**
- **Nếu thêm thư viện mới, kiểm tra compatibility với Vite/React 18.**

---
**Tóm lại:**
Project này được thiết kế để dễ mở rộng, dễ bảo trì, tối ưu hiệu năng, đồng bộ UI/UX, và dễ dàng cá nhân hóa.
Hãy luôn kiểm tra lại các file cấu hình (tailwind, types, data) khi muốn thay đổi lớn!
