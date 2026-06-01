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
        // linkDemo: "https://e-commerce-website-d2c08.web.app/"
    },
    {
        id: "3",
        title: "Task Manager",
        type: "Full-stack",
        techStack: ["ReactJS", "TypeScript", "Tailwind CSS", "Postman", "NodeJS (ExpressJS)", "MongoDB", "Kanban"],
        description: "Ứng dụng quản lý công việc cá nhân cho phép người dùng theo dõi và quản lý công việc một cách hiệu quả. Với giao diện trực quan và dễ sử dụng, ứng dụng hỗ trợ tạo, cập nhật, xóa và phân loại công việc, giúp người dùng sắp xếp công việc hàng ngày một cách khoa học.",
        linkGithub: "https://github.com/VyLNB/Task-Manager"
        // linkDemo: "https://e-commerce-website-d2c08.web.app/"
    }
]