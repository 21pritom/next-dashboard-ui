export default function deshboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
    <html lang="en">
      <div className='h-screen flex'>
        {/* *Left */}
        <div className="w-[14%] md:w[8%] lg:w[16%] bg-red-200">r</div>
         {/* *Right */}
        <div className="w-[86%] bg-blue-200" >g</div>

      </div>
    </html>
  );
}
