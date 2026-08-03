// js/header.js
document.addEventListener("DOMContentLoaded", async () => {
    let isLoggedIn = false;
    if (window.supabaseInstance) {
        const { data: { session } } = await window.supabaseInstance.auth.getSession();
        isLoggedIn = !!session;
    }

    const navHTML = `
    <header>
        <div class="nav-container">
            <a href="/index.html" class="logo">Nocturnal Gaming</a>
            <nav>
                <ul>
                    <li class="dropdown">
                        <a href="/index.html#games">Games ▾</a>
                        <ul class="dropdown-content">
                            <li><a href="/games/copter-kid.html">Copter Kid</a></li>
                            <li><a href="/games/every-second-counts.html">Every Second Counts</a></li>
                            <li><a href="/games/rgb.html">R.G.B</a></li>
                        </ul>
                    </li>
                    <li><a href="/privacy.html">Privacy</a></li>
                    <li><a href="/terms.html">Terms</a></li>
                    <li><a href="/index.html#contact">Contact</a></li>
                    ${isLoggedIn ? `
                        <li><a href="/dashboard/">Dashboard</a></li>
                        <li><a href="/profile/">Profile</a></li>
                        <li><a href="/logout/" style="color: #ff5252;">Logout</a></li>
                    ` : `
                        <li><a href="/login/">Login</a></li>
                        <li><a href="/register/">Register</a></li>
                    `}
                </ul>
            </nav>
        </div>
    </header>
    `;

    document.body.insertAdjacentHTML('afterbegin', navHTML);
});
