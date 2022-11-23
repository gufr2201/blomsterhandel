# skriv in nedan
sass --watch styles.scss styles.css

# blomsterhandel

# Att göra

GÖr :hover över knappar och lägg :active innan så att knapp lyser upp innan man trycker.
Testa att göra knapparna scheumorphic.

# KOlla upp hur man gör grid med scss
# object-fit: cover; gör detta på bilder för att allt ska passa.
# Lägg in box-shadow på bilderna

Använd nedan kod i css för att visa breadcrumbs 

breadcrumb > li {
  display: inline;
}

.breadcrumb li+li::before {
	padding: 10px;
 content: ">";
}

.breadcrumb a {
 text-decoration: none;
}

.breadcrumb a:hover {
 color: red;
}

# Kan köra nedan för breadcrumb också
.breadcrumb {
  text-align: left;
}
.breadcrumb li {
  float: left;
}

.breadcrumb a {
  color: #fff;
  background: darkcyan;
  text-decoration: none;
  position: relative; 
  height: 30px;
  line-height: 30px;
  text-align: center;
  margin-right: 15px;
  padding: 0 5px;
}
.breadcrumb a::before,
.breadcrumb a::after {
  content:"";
  position: absolute;
  border-color: darkcyan;
  border-style: solid;
  border-width: 15px 5px;
}  
.breadcrumb a::before {
  left: -10px;
  border-left-color: transparent;
}

.breadcrumb a::after {
  left: 100%;
  border-color: transparent;
  border-left-color: darkcyan;
}
.breadcrumb a:hover {
  background-color: blue;
} 
.breadcrumb a:hover::before {
  border-color: blue;
  border-left-color: transparent;
}
.breadcrumb a:hover::after {
border-left-color: blue;
}


# Skapa user stories och tasks

# User stories
En hemsida som säljer blommor och växter
-Skapa Hero-bild
-skapa nav-meny för de olika sidorna och gör så att de 
ändras när man hover över dem.
- lägga upp de olika produkterna och fixa listorna under med info som vecklas ut
- 