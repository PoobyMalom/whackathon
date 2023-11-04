import React, { useState } from 'react';

function DropdownMenu() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleMenuItemClick = (page: string) => {
        // Implement your logic to navigate to the selected page
        console.log(`Navigating to ${page}`);
    };

    return (
        <div className="dropdown">
            <button onClick={toggleMenu} className="dropbtn">
                Menu
            </button>
            {showMenu && (
                <div className="dropdown-content">
                    <button onClick={() => handleMenuItemClick('Page 1')}>Page 1</button>
                    <button onClick={() => handleMenuItemClick('Page 2')}>Page 2</button>
                    <button onClick={() => handleMenuItemClick('Page 3')}>Page 3</button>
                </div>
            )}
        </div>
    );
}

export default DropdownMenu;