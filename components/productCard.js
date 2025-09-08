const Badge = ({ children, className }) => (
  <span className={`inline-flex items-center rounded-lg px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`}>
    {children}
  </span>
);

const Button = ({ children, className, ...props }) => (
  <button className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${className}`} {...props}>
    {children}
  </button>
);

const Card = ({ children, className }) => (
  <div className={`rounded-xl border bg-card text-card-foreground shadow ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className }) => (
  <div className={`p-6 pt-0 ${className}`}>
    {children}
  </div>
);


const Heart = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.76-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

const Star = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const ChevronRight = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right">
    <path d="m9 18 6-6-6-6" />
  </svg>
);
const ChevronLeft = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left">
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const bakingSetImage = "https://placehold.co/400x400/F5F5F5/333333?text=Baking+Set";
const dinnerwareSetImage = "https://placehold.co/400x400/F5F5F5/333333?text=Dinnerware+Set";
const knifeSetImage = "https://placehold.co/400x400/F5F5F5/333333?text=Knife+Set";
const mixingBowlsImage = "https://placehold.co/400x400/F5F5F5/333333?text=Mixing+Bowls";

const ProductCard = ({ 
  name, 
  image, 
  originalPrice, 
  salePrice, 
  discount, 
  rating = 4.5, 
  reviewCount = 65,
  badge,
  badgeType = 'sale'
}) => {
  const getBadgeVariant = () => {
    switch (badgeType) {
      case 'online':
        return 'bg-success text-success-foreground';
      case 'deal':
        return 'bg-primary text-primary-foreground';
      default:
        return 'bg-accent text-accent-foreground';
    }
  };

  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <img 
            src={image} 
            alt={name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {badge && (
            <Badge 
              className={`absolute top-3 left-3 rounded-lg ${getBadgeVariant()}`}
            >
              {badge}
            </Badge>
          )}

          <Button
            className="absolute top-3 right-3 bg-white/80 hover:bg-white text-foreground rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>

        <div className="p-4">
          <p className="text-xs text-green-600 font-medium mb-1 uppercase tracking-wide">
            Kitchen Frenzy
          </p>

          <h3 className="font-medium text-sm mb-3 line-clamp-2 leading-tight">
            {name}
          </h3>

          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${
                    i < Math.floor(rating) 
                      ? 'fill-orange-400 text-orange-400' 
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500">
              {rating} ({reviewCount})
            </span>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <span className="text-lg font-bold text-gray-800">
              ${salePrice.toFixed(2)}
            </span>
            <span className="text-sm text-gray-400 line-through">
              ${originalPrice.toFixed(2)}
            </span>
          </div>

          <Badge className="text-xs border-green-600 text-green-600 rounded-lg">
            {discount}% OFF RRP
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

const products = [
  {
    id: '1',
    name: 'Wolstead Mineral Non Stick Baking Tray & Pan Set 4pc',
    image: bakingSetImage,
    originalPrice: 159.95,
    salePrice: 79.95,
    discount: 50,
    badge: 'ONLINE ONLY',
    badgeType: 'online',
    rating: 4.9,
    reviewCount: 143
  },
  {
    id: '2',
    name: 'Professional Chef Knife Set with Wooden Block',
    image: knifeSetImage,
    originalPrice: 299.95,
    salePrice: 149.95,
    discount: 50,
    badge: 'HOT DEAL',
    badgeType: 'deal',
    rating: 4.7,
    reviewCount: 89
  },
  {
    id: '3',
    name: 'Modern Ceramic Mixing Bowl Set 5pc',
    image: mixingBowlsImage,
    originalPrice: 89.95,
    salePrice: 44.95,
    discount: 50,
    badge: 'KITCHEN FRENZY',
    badgeType: 'sale',
    rating: 4.6,
    reviewCount: 156
  },
  {
    id: '4',
    name: 'Elegant Dinnerware Set with Cutlery 16pc',
    image: dinnerwareSetImage,
    originalPrice: 199.95,
    salePrice: 99.95,
    discount: 50,
    badge: 'HOT DEAL',
    badgeType: 'deal',
    rating: 4.8,
    reviewCount: 201
  },
  {
    id: '5',
    name: 'Premium Stainless Steel Cookware Set',
    image: bakingSetImage,
    originalPrice: 399.95,
    salePrice: 199.95,
    discount: 50,
    badge: 'ONLINE ONLY',
    badgeType: 'online',
    rating: 4.9,
    reviewCount: 78
  }
];

const App = () => {
  return (
    <section className="py-12 bg-gray-50 font-sans antialiased">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8">
          <div>
            <p className="text-sm text-red-600 font-medium mb-1">Kitchen Frenzy sale ends tonight</p>
            <h2 className="text-3xl font-bold text-gray-900">Last chance to save!</h2>
          </div>
          
          <div className="mt-4 sm:mt-0">
            <Button 
              className="flex items-center gap-2 text-red-600 border border-red-600 hover:bg-red-600 hover:text-white transition-colors duration-300 rounded-full px-4 py-2"
            >
              Shop Kitchen Frenzy
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-800">Featured Products</h3>
          <div className="flex gap-2">
            <Button className="rounded-full">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button className="rounded-full">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
            />
          ))}
        </div>

        <div className="mt-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Top offers</h3>
            <div className="flex gap-2">
              <Button className="rounded-full">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button className="rounded-full">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product) => (
              <ProductCard
                key={`top-${product.id}`}
                {...product}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
