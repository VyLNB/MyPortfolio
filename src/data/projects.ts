export const projects = [
    {
        id: "1",
        title: "Real-time Messaging Web Application",
        type: "Full-stack",
        techStack: ["ReactJS", "Node.js (ExpressJS)", "MongoDB", "Socket.io", "Postman", "JWT"],
        summary: "Một ứng dụng chat web thời gian thực cho phép người dùng nhắn tin tức thì trong các cuộc trò chuyện riêng tư hoặc nhóm.",
        overview: `Dự án được xây dựng nhằm mô phỏng một hệ thống nhắn tin hiện đại, nơi người dùng có thể:
        - Đăng ký / đăng nhập tài khoản an toàn
        - Tham gia trò chuyện theo thời gian thực
        - Gửi và nhận tin nhắn ngay lập tức mà không cần tải lại trang
        Mục tiêu chính là rèn luyện kỹ năng backend với Node.js, đặc biệt là làm việc với WebSocket và hệ thống real-time.`,
        keyFeatures: [
            "Đăng ký / đăng nhập (xác thực bằng JWT)",
            "Nhắn tin real-time bằng Socket.io",
            "Chat 1-1 giữa người dùng",
            "Hiển thị trạng thái online / offline",
            "Lưu lịch sử tin nhắn trong database",
            "Giao diện responsive trên mobile và desktop",
            "API được bảo vệ bằng middleware xác thực",
        ],
        myResponsibilities: [
            "Xây dựng hệ thống API REST bằng Node.js (Express.js)",
            "Thiết kế và triển khai hệ thống chat real-time với Socket.io",
            "Thiết kế database cho users, messages và conversations",
            "Xây dựng cơ chế xác thực JWT và bảo vệ route",
            "Phát triển giao diện frontend bằng React",
            "Kết nối frontend với backend qua API và WebSocket"
        ],
        linkGithub: "https://github.com/VyLNB/Real-time-chat",
        linkDemo: "https://real-time-chat-blond.vercel.app"
    },
    {
        id: "2",
        title: "E-commerce Website",
        type: "Frontend",
        techStack: ["ReactJS", "Tailwind CSS"],
        summary: `Một ứng dụng dashboard quản trị giúp theo dõi và quản lý toàn bộ hoạt động kinh doanh, bao gồm khách hàng, đơn hàng, sản phẩm và doanh thu. 
                    Hệ thống cung cấp giao diện trực quan với biểu đồ phân tích dữ liệu theo thời gian, 
                    hỗ trợ người quản trị đưa ra quyết định nhanh chóng và chính xác.`,
        overview: `Ứng dụng được xây dựng nhằm cung cấp một hệ thống quản trị tập trung cho doanh nghiệp, 
                    cho phép theo dõi toàn diện các chỉ số kinh doanh quan trọng như doanh thu, đơn hàng và khách hàng.
                    Thông qua các biểu đồ trực quan, hệ thống giúp phân tích dữ liệu theo thời gian thực và hỗ trợ việc ra quyết định dựa trên dữ liệu (data-driven decisions).`,
        keyFeatures: [
            "Dashboard tổng quan với các chỉ số: khách hàng, đơn hàng, doanh thu",
            "Biểu đồ phân tích dữ liệu theo tháng (Recharts)",
            "Thống kê trạng thái đơn hàng",
            "Danh sách sản phẩm bán chạy",
            "Quản lý sản phẩm (thêm / sửa / xóa / tìm kiếm)",
            "Quản lý đơn hàng và chi tiết đơn hàng",
            "Quản lý người dùng và phân quyền",
            "Quản lý danh mục, thương hiệu và mã giảm giá",
            "Trang hồ sơ người dùng (Profile management)",
        ],
        myResponsibilities: [
            "Phát triển giao diện dashboard bằng React.js",
            "Tích hợp và hiển thị dữ liệu bằng Recharts",
            "Xây dựng các chức năng CRUD cho sản phẩm, đơn hàng và người dùng",
            "Kết nối frontend với backend thông qua RESTful APIs",
            "Xây dựng hệ thống xác thực và phân quyền người dùng",
            "Thiết kế giao diện responsive và tối ưu trải nghiệm người dùng",
        ],
        linkGithub: "https://github.com/VyLNB/E-Commerce-NodeJS"
    },
    {
        id: "3",
        title: "Task Manager",
        type: "Full-stack",
        techStack: ["ReactJS", "TypeScript", "Tailwind CSS", "Postman", "NodeJS (ExpressJS)", "MongoDB", "Kanban"],
        summary: `Dự án này tập trung vào việc hợp lý hóa quá trình theo dõi dự án, cộng tác nhóm và phê duyệt bảng chấm công (timesheet) 
                thông qua một giao diện người dùng trực quan, sử dụng phong cách thiết kế Glassmorphism.`,
        overview: `Dự án Task Manager là một nền tảng quản lý công việc và thời gian full-stack hiện đại. 
                    Dự án được xây dựng nhằm mục đích theo dõi tiến độ dự án, quản lý không gian làm việc, 
                    và tối ưu hóa quy trình phê duyệt bảng chấm công với hệ thống phân quyền (RBAC) chi tiết.`,
        keyFeatures: [
            "Hệ thống xác thực bảo mật với JWT và phân quyền vai trò (RBAC)",
            "Quản lý Workspaces, dự án và phân công thành viên",
            "Bảng Kanban tương tác hỗ trợ kéo thả quản lý trạng thái công việc",
            "Quản lý công việc chi tiết (ưu tiên, tags, hạn chót, subtasks)",
            "Hệ thống ghi nhận thời gian làm việc (Time Tracking) và bảng chấm công",
            "Quy trình duyệt bảng chấm công theo phân cấp",
            "Admin Dashboard phân tích dữ liệu thời gian thực và quản lý nhân sự",
            "Giao diện hiện đại theo phong cách Glassmorphism và tối ưu hóa UX (Optimistic UI)"
        ],
        myResponsibilities: [
            "Thiết kế kiến trúc hệ thống và cơ sở dữ liệu MongoDB",
            "Xây dựng RESTful API với NodeJS, ExpressJS tích hợp bảo mật JWT",
            "Xử lý dữ liệu phức tạp thống kê bằng Mongoose Aggregation Pipelines",
            "Phát triển giao diện React, TypeScript kết hợp TailwindCSS",
            "Tích hợp tính năng kéo thả (Drag and Drop) cho bảng Kanban",
            "Tối ưu trải nghiệm người dùng (UX) và đồng bộ hóa dữ liệu (Optimistic UI)"
        ],
        linkGithub: "https://github.com/VyLNB/Task-Manager"
    },
    {
        id: "4",
        title: "Grocery Store Management",
        type: "Full-stack",
        techStack: ["ReactJS", "TypeScript", "Java 25", "Spring Boot", "MySQL", "Spring Security", "JWT", "Hibernate"],
        summary: `Dự án phần mềm quản lý cửa hàng tạp hóa cung cấp hệ thống POS (Point of Sale) và các API RESTful 
                giúp quản lý sản phẩm, đơn hàng và hệ thống xác thực người dùng an toàn.`,
        overview: `Ứng dụng là một hệ thống quản lý cửa hàng tạp hóa toàn diện thiết kế theo mô hình MVC. 
                    Dự án cung cấp frontend POS hỗ trợ bán hàng tại quầy, kết hợp với backend mạnh mẽ 
                    bằng Spring Boot để xử lý sản phẩm, danh mục, đơn hàng và đảm bảo bảo mật bằng Spring Security & JWT.`,
        keyFeatures: [
            "Hệ thống POS (Point of Sale) giao diện bán hàng tại quầy và thanh toán trực tiếp",
            "Xác thực và phân quyền an toàn với JWT và hỗ trợ Refresh Token",
            "Quản lý Sản phẩm và Danh mục hàng hóa chuyên sâu",
            "Quản lý Đơn hàng (Order) và chi tiết các mặt hàng (Order Items)",
            "Thiết kế API RESTful chuẩn theo mô hình Layered Architecture (Controller-Service-Repository)",
            "Sử dụng Data Transfer Object (DTO) pattern để trao đổi dữ liệu client-server"
        ],
        myResponsibilities: [
            "Xây dựng giao diện frontend POS bằng ReactJS, TypeScript và Vite",
            "Phát triển RESTful API và logic nghiệp vụ bằng Java Spring Boot",
            "Thiết kế cơ sở dữ liệu MySQL thông qua Spring Data JPA và Hibernate",
            "Triển khai hệ thống bảo mật ứng dụng với Spring Security và JWT",
            "Tối ưu hóa kiến trúc dự án và quy trình trao đổi dữ liệu an toàn"
        ],
        linkGithub: "https://github.com/VyLNB/grocery-store-management"
    }
]