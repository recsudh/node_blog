const logout = async (req, res) => {
    try {
      await req.session.destroy(); // Attempt to destroy the session
      res.redirect("/"); // Redirect to the home page after successful logout
    } catch (error) {
      console.error('Error destroying session:', error); // Log error for debugging
    }
  };
  
  module.exports = logout;
  