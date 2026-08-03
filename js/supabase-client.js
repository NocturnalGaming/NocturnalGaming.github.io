const SUPABASE_URL = 'https://uyxoekywhppdkyfujlqn.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5eG9la3l3aHBwZGt5ZnVqbHFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUxMzE0OTIsImV4cCI6MjEwMDcwNzQ5Mn0.wmqaQMXwPVNqenC4xfo4LVry8vCY2fKshvTDZ0d-1-U';

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

document.addEventListener("DOMContentLoaded", async () => {
    const { data: { session } } = await supabase.auth.getSession();
    const authLinks = document.getElementById('auth-links');
    
    if (session && authLinks) {
        authLinks.innerHTML = `
            <a href="dashboard.html">Dashboard</a>
            <a href="profile.html">Profile</a>
            <a href="logout.html" style="color: #ff5252;">Logout</a>
        `;
    }
});
