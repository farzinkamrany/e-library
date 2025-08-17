export interface Book {
    id: number;
    title: string;
    author: string;
    category: string;
    description: string;
    image: string;
  }
  
  export const books: Book[] = [
    { id: 1, title: "کتاب ری‌اکت برای مبتدیان", author: "فرزین", category: "برنامه‌نویسی", description: "شروع React.", image: "/images/download.jpg" },
    { id: 2, title: "طراحی رابط کاربری مدرن", author: "جک", category: "طراحی", description: "راهنمای UI.", image: "/images/Gutenberg_Bible,_Lenox_Copy,_New_York_Public_Library,_2009._Pic_01.jpg" },
    { id: 3, title: "جاوااسکریپت پیشرفته", author: "سم", category: "برنامه‌نویسی", description: "JS حرفه‌ای.", image: "/images/images.jpg" },
    { id: 4, title: "پایتون پیشرفته", author: "فرزین", category: "برنامه‌نویسی", description: "پایتون حرفه‌ای.", image: "/images/images.png" },
    { id: 5, title: "انگولار پیشرفته", author: "جک", category: "برنامه‌نویسی", description: "انگولار حرفه‌ای.", image: "/images/images.jpg" },
  ];
  