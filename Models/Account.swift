class Account{
    var id: String
    var email: String
    var password: String
    var verified: Bool
    var isAdmin: Bool

    init(email: String, password: String) {
        self.id = Account.randomId()
        self.email = email
        self.password = password
        self.verified = false
        self.isAdmin = false
    }

    /// Generate a random string of given length (default 16) using
    /// letters and digits.
    static func randomId(length: Int = 16) -> String {
        let characters = Array("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789")
        var id = ""
        id.reserveCapacity(length)
        for _ in 0..<length {
            id.append(characters[Int.random(in: 0..<characters.count)])
        }
        return id
    }

    func login(email: String, password: String) -> Bool {
        return email == self.email && password == self.password
    }

    func logout() {
        // empty for now
    }

    func verifyCollege((email: String, college: String)) -> Bool {
        // if college is verified
        self.verified = true

        //else
        self.verified = false
    }

    func changeAdminStatus() {
        self.isAdmin = !self.isAdmin
    }

}