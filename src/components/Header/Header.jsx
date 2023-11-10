import "./header.scss";

const Header = ({ title, headerExpanded }) => {
  return (
    <div className="header__container">
      <img
        src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
        alt="headerImage"
        className={`header__image-div ${
          headerExpanded ? "header__image-expand" : "header__image-contract"
        }`}
      />

      <h1
        className={`header__text ${
          headerExpanded ? "header__text-expand" : "header__text-contract"
        }`}
      >
        {title}
      </h1>
    </div>
  );
};

export default Header;
