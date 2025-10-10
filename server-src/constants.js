var e = {};
e.MAX_BIO_SIZE = 3000; //Unused function, but kept so breaking doesn't happen.
e.MIN_USERNAME_LENGTH = 3; //Minimal characters.
e.MAX_USERNAME_LENGTH = 20; //Maximum characters.
e.MIN_PASSWORD_LENGTH = 4; //Minimal characters.
e.MAX_PASSWORD_LENGTH = 40; //Maximum characters.
e.MAX_MAIL_SIZE = 1500; //Unused function, but kept so breaking doesn't happen.
e.USERNAME_CHAR_SET =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"; //What characters are allowed in usernames, must be url and file name friendly.
e.MAX_MEDIA_SIZE = 10 * 1024 * 1024; // 10 MB max per file
e.MAX_MEDIA_FOLDER_SIZE = 10 * 1024 * 1024 * 1024; // 10 GB total storage
e.MAX_PROFILE_PICTURE_SIZE = 50 * 1024; //50KB
e.MAX_DISPLAY_NAME_SIZE = 35; //Minimal characters.
e.MIN_DISPLAY_NAME_SIZE = 2; //Maximum characters.
e.ROOM_CLEANUP_TIMEOUT = 60000 * 2; // 2 minutes
e.MAX_MESSAGE_SIZE = 400; //400 characters.
e.MAX_SOCKETS_PER_USER = 12; //Maximum of 12 clients per signed in user.
e.MAX_GUEST_SOCKETS = 20; //Maximum of 20 sockets per user.
e.MAX_REQUESTS_PER_SECOND = 40; //Maximum of 40 requests per second for user or ip.
e.MAX_REQUESTS_TIMEOUT = 15000; //Time it takes to timeout requests.
e.BCRYPT_SALT_ROUNDS = 10; //bcryptjs salt rounds used for comparing hashed passwords.
e.MAX_USER_SESSIONS = 15; //Max user sessions per user.

e.DISPLAYNAME_CHAR_SET =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890~`!@#$%^&*()-_=+{[]}|\\'\";:/?.>,<";

module.exports = e;
