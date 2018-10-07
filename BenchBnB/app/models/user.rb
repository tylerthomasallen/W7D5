class User < ApplicationRecord
  validates :username, :session_token, :password_digest, presence: true, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  attr_reader :password

  after_initialize :ensure_token

  def self.find_by_credentials(username, pw)
    user = User.find_by(username: username)
    user && user.valid_pw?(pw) ? user : nil
  end

  def valid_pw?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def ensure_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_token
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

end
