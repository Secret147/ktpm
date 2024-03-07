import pymongo

# Kết nối tới MongoDB
client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client["django"]
collection = db["book_book"]

# Các câu lệnh INSERT INTO
insert_commands = [
    "INSERT INTO `django`.`book_book` (`name`, `title`, `year`, `image`, `description`, `language`) VALUES ('Đắc Nhân Tâm ', ' Dale Carnegie', '2004', 'https://isachhay.net/wp-content/uploads/2017/08/sach-hay-dac-nhan-tam.jpg', 'Đắc Nhân Tâm (How to Win Friends and Influence People) được mệnh danh là quyển sách hay nhất, nổi tiếng nhất, bán chạy nhất và nó có tầm ảnh hưởng đi xa nhất mọi thời đại, Đắc Nhân Tâm của soạn giả Dale Carnegie là 1 quyển sách hay nên đọc để bạn biết về nghệ thuật thu phục lòng người và làm tất cả mọi người phải yêu mến mình.', 'English')",
    "INSERT INTO `django`.`book_book` (`name`, `title`, `year`, `image`, `description`, `language`) VALUES ('Nhà giả kim', 'Paulo Coelho', '2005', 'https://isachhay.net/wp-content/uploads/2017/08/sach-hay-nha-gia-kim.jpg', 'Nhà giả kim (The Alchemist) của Paulo Coelho là một cuốn sách hay dành cho những người đã đánh mất đi ước mơ hoặc chưa bao giờ có nó. Nếu bạn đang cần tìm những cuốn sách nên đọc để thành công thì Nhà Giả Kim rất xứng đáng. Thành công như thế nào: thành công trong trong suy nghĩ và hành động.', 'Vietnamese')",
    # Tiếp tục thêm các câu lệnh INSERT INTO khác ở đây
]

# Lặp qua từng câu lệnh INSERT INTO
for insert_command in insert_commands:
    # Parse dữ liệu từ câu lệnh INSERT INTO
    values_start_index = insert_command.index("VALUES") + len("VALUES")
    values_end_index = insert_command.rindex("(")
    values_str = insert_command[values_start_index:values_end_index].strip()

    values_list = values_str.split(",")
    name = values_list[0].strip("' ")
    title = values_list[1].strip("' ")
    year = int(values_list[2].strip("' "))
    image = values_list[3].strip("' ")
    description = values_list[4].strip("' ")
    language = values_list[5].strip("' ")

    # Tạo một document và thêm vào MongoDB collection
    book_document = {
        "name": name,
        "title": title,
        "year": year,
        "image": image,
        "description": description,
        "language": language,
    }
    collection.insert_one(book_document)

print("Data inserted successfully.")
