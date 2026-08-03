const SUPABASE_URL = 'https://uyxoekywhppdkyfujlqn.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5eG9la3l3aHBwZGt5ZnVqbHFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUxMzE0OTIsImV4cCI6MjEwMDcwNzQ5Mn0.wmqaQMXwPVNqenC4xfo4LVry8vCY2fKshvTDZ0d-1-U';

// Prevent duplicate declaration if script is loaded multiple times
if (!window.supabaseInstance) {
    window.supabaseInstance = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

const supabase = window.supabaseInstance;

document.addEventListener("DOMContentLoaded", async () => {
    const { data: { session } } = await supabase.auth.getSession();
    const authLinks = document.getElementById('auth-links');
    
    if (session && authLinks) {
        authLinks.innerHTML = `
            <li><a href="dashboard.html">Dashboard</a></li>
            <li><a href="profile.html">Profile</a></li>
            <li><a href="logout.html" style="color: #ff5252;">Logout</a></li>
        `;
    }
});
