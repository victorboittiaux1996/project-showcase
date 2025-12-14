const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Soft cloud-like shapes */}
      <div 
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-white/10 blur-3xl animate-float"
      />
      <div 
        className="absolute top-1/3 -right-48 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl animate-float-delayed"
      />
      <div 
        className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full bg-pink-200/10 blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div 
        className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-violet-300/5 blur-3xl animate-float-delayed"
        style={{ animationDelay: "3s" }}
      />
      
      {/* Bottom gradient for depth */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-pink-200/30 to-transparent"
      />
    </div>
  );
};

export default FloatingElements;
