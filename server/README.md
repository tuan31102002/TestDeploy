# run server
Bước 1 : cài python version 3.9.5 qua link https://www.python.org/downloads/release/python-3105/

Bước 2 : bật command Prompt

Bước 2 : nhập : pip install Flask
                pip install Flask-JWT-Extended
                pip install flask-restful
                pip install Flask-Cors==1.10.3
                pip install flask-socketio
                pip install Flask-SQLAlchemy 
        : đóng command Prompt


Bước 3 : vào project , mở new Terminal

Bước 4 : Nhập : cd/server
                python run.py
(hoặc cài extension code runner , vào file run.py , chuột phải ấn run code)

Nếu gặp lỗi **AttributeError: module 'collections' has no attribute 'Iterable'** của thư viện Flask-Cors
- Truy cập đường link để xem cách sửa https://www.mongodb.com/community/forums/t/run-py-error-module-collections-has-no-attribute-iterable/140273/2
(hoặc vào file __init__.py của flask-cors sửa 
isinstance(obj, collections.Iterable) thành
isinstance(obj, collections.abc.Iterable)
)