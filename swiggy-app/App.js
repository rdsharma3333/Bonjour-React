import React from "react";
import ReactDOM from "react-dom/client";

const restaurants = [
        {
            id: 1,
            name: "Pizza Palace",
            cuisine: "Italian",
            rating: "4.5",
            image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=300&h=200&fit=crop"
        },
        {
            id: 2,
            name: "Sushi Master",
            cuisine: "Japanese",
            rating: "4.7",
            image: "https://images.unsplash.com/photo-1553621042-f6e147245172?w=300&h=200&fit=crop"
        },
        {
            id: 3,
            name: "Burger Barn",
            cuisine: "American",
            rating: "4.3",
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop"
        },
        {
            id: 4,
            name: "Curry House",
            cuisine: "Indian",
            rating: "4.6",
            image: "https://images.unsplash.com/photo-1585238341710-4dd964de986e?w=300&h=200&fit=crop"
        },
        {
            id: 5,
            name: "Taco Fiesta",
            cuisine: "Mexican",
            rating: "4.4",
            image: "https://images.unsplash.com/photo-1565877662801-51a058cf4f60?w=300&h=200&fit=crop"
        },
        {
            id: 6,
            name: "Thai Palace",
            cuisine: "Thai",
            rating: "4.8",
            image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e4e31?w=300&h=200&fit=crop"
        },
    ];

const Logo = () => (
    <svg
        className="logo"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="App logo"
    >
        <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#ff7a59" offset="0%" />
                <stop stopColor="#ffb86c" offset="100%" />
            </linearGradient>
        </defs>
        <rect x="2" y="2" width="60" height="60" rx="12" fill="url(#g)" />
        {/* Plate */}
        <circle cx="42" cy="28" r="10" fill="none" stroke="#ffffff" strokeWidth="4" />
        {/* Fork */}
        <g stroke="#ffffff" strokeWidth="4" strokeLinecap="round">
            <path d="M18 12 V28" />
            <path d="M22 12 V28" />
            <path d="M26 12 V28" />
            <path d="M22 28 V44" />
        </g>
    </svg>
);


const Header = () => (
    <div className='header'> 
        <div className="logo-container">
            <Logo />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
); 

const RestaurantCard = ({ name, cuisine, rating, image }) => (
    <div className="restaurant-card">
        <img 
            className="restaurant-image"
            src={image}
            alt={name}
        />
        <h3 className="restaurant-name">{name}</h3>
        <p className="restaurant-cuisine">{cuisine}</p>
        <p className="restaurant-rating">⭐ {rating}</p>
    </div>
);  

const SearchBar = () => (
    <div className="search-bar">
        <input type="text" placeholder="Search for restaurants or cuisines..." />
        <button>Search</button>
    </div>
);  

const Body = () => {
    return (
        <div className="body">
            <SearchBar/>
            <div className="restaurant-list">
                {restaurants.map(restaurant => (
                    <RestaurantCard 
                        key={restaurant.id}
                        name={restaurant.name}
                        cuisine={restaurant.cuisine}
                        rating={restaurant.rating}
                        image={restaurant.image}
                    />
                ))}
            </div>
        </div>
    );
};

const AppLayout = () =>(
    <div className="app"> 
        <Header/>
        <Body/>
        {/* <Header/>
        <Body/>
        <Footer/> */}

    </div>
);
 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);

    