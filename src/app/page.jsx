import Image from 'next/image'
import logo from '@/photo/logo.svg'
import baner from '@/photo/baner.svg'
import article from '@/photo/article.svg'
import article1 from '@/photo/article1.svg'
import article2 from '@/photo/article2.svg'
import baner1 from '@/photo/baner1.svg'
import img from '@/photo/img.svg'
import img1 from '@/photo/img1.svg'
import img2 from '@/photo/img2.svg'
import img3 from '@/photo/img3.svg'
import img4 from '@/photo/img4.svg'
import img5 from '@/photo/img5.svg'
import img6 from '@/photo/img6.png'
import swipper from '@/photo/awipper.svg'
import swipper1 from '@/photo/awipper1.svg'
import swipper2 from '@/photo/awipper3.svg'
import footer from '@/photo/footer.svg'
import phone from '@/photo/phone.svg'
import email from '@/photo/email.svg'
import twitter from '@/photo/twitter.svg'
import calendar from '@/photo/calendar.svg'
import insta from '@/photo/instagram.svg'
import facebook from '@/photo/facebook.svg'

export default function Home() {
	const pro = [
		{
			id: 1,
			image: img,
			b: 'IDR.200.000.000',
			p: 'Jl. Soekarno Hatta No.1',
			pp: 'Sewa',
			img: img6,
		},
		{
			id: 2,
			image: img1,
			b: 'IDR.200.000.000',
			p: 'Jl. Soekarno Hatta No.1',
			pp: 'Jual',
			img: img6,
		},
		{
			id: 3,
			image: img2,
			b: 'IDR.200.000.000',
			p: 'Jl. Soekarno Hatta No.1',
			pp: 'Property Baru',
			img: img6,
		},
		{
			id: 4,
			image: img3,
			b: 'IDR.200.000.000',
			p: 'Jl. Soekarno Hatta No.1',
			pp: 'Sewa',
			img: img6,
		},
		{
			id: 5,
			image: img4,
			b: 'IDR.200.000.000',
			p: 'Jl. Soekarno Hatta No.1',
			pp: 'Sewa',
			img: img6,
		},
		{
			id: 6,
			image: img5,
			b: 'IDR.200.000.000',
			p: 'Jl. Soekarno Hatta No.1',
			pp: 'Sewa',
			img: img6,
		},
	]
	const pro1 = [
		{
			id: 1,
			img: swipper,
			b: 'Kamar Tidur',
			p: 'Rumah minimalist Type-A2',
			bb: 'IDR.200jt',
		},
		{
			id: 2,
			img: swipper1,
			b: 'Kamar Tidur',
			p: 'Rumah minimalist Type-A2',
			bb: 'IDR.200jt',
		},
		{
			id: 3,
			img: swipper2,
			b: 'Kamar Tidur',
			p: 'Rumah minimalist Type-A2',
			bb: 'IDR.200jt',
		},
	]

	return (
		<>
		<div className='max-w-[1300px] m-auto'>
				<main className='bg-[#F3FFF4]'>
				<header className='flex justify-between items-center py-[20px] bg-[#048853] md:px-[10%] px-[5%]'>
					<div className='flex gap-[10px] items-center text-[white]'>
						<Image src={logo} alt='logo' width={30} height={10} />
						<b>Rumah Impian</b>
					</div>
					<div className='md:flex md:gap-[20px] md:text-[white] hidden'>
						<p>BRANDA</p>
						<p>LAYANAN</p>
						<p>FITUR</p>
						<p>KONTAK</p>
					</div>
					<div className='flex gap-[10px]'>
						<button className='text-[white]'>DAFTAR</button>
						<button className='text-[#048853] bg-[white] py-[7px] px-[17px]'>
							MASUK
						</button>
					</div>
				</header>
				<section className='bg-[#048853] md:pl-[10%] flex justify-between items-center text-[white] flex-col md:flex-row'>
					<aside className='md:w-[40%] px-[5%] flex flex-col gap-[15px] items-start md:px-0'>
						<h1 className='text-[60px]'>Membantu Temukan Rumah Impian.</h1>
						<p className='text-[22px]'>
							<span className='font-bold'> Rumah Impian </span> hadir untuk
							temukan rumah terbaik untukmu, untuk di jual ataupun di sewa
							dengan sumber terpercaya.
						</p>
						<button className='text-[#048853] bg-[white] py-[10px] text-[20px] px-[27px]'>
							Temukan Rumah
						</button>
					</aside>
					<Image src={baner} alt='baner' width={800} height={10} />
				</section>
				<section className='md:h-[70vh] px-[5%] py-[50px] md:px-[10%]'>
					<div className='flex flex-col items-center gap-[25px]'>
						<div className='flex flex-col gap-[7px] items-center'>
							<h2 className='text-[40px] text-[#048853]'>Layanan Kami</h2>
							<p>Rumah impian hadir menjadi solusi bagi kamu</p>
						</div>
						<div className='flex flex-col gap-[20px] md:flex-row'>
							<div className='rounded-[7px] bg-[#048853] text-[white] p-[25px] flex flex-col gap-[15px] items-center'>
								<Image src={article} alt='article' width={80} height={10} />
								<b className='text-[20px]'>Property Baru</b>
								<p className='text-center text-[16px]'>
									Rumah impian kini jadi kenyataan, Beli rumah bary dengan
									fasilitas terbaik dengan lingkungan yang nyaman.
								</p>
							</div>
							<div className='rounded-[7px] bg-[white] p-[25px] flex flex-col gap-[15px] items-center'>
								<Image src={article1} alt='article' width={80} height={10} />
								<b className='text-[20px]'>Property Baru</b>
								<p className='text-center text-[16px]'>
									Rumah impian kini jadi kenyataan, Beli rumah bary dengan
									fasilitas terbaik dengan lingkungan yang nyaman.
								</p>
							</div>
							<div className='rounded-[7px] p-[25px] bg-[white] flex flex-col gap-[15px] items-center'>
								<Image src={article2} alt='article' width={80} height={10} />
								<b className='text-[20px]'>Property Baru</b>
								<p className='text-center text-[16px]'>
									Rumah impian kini jadi kenyataan, Beli rumah bary dengan
									fasilitas terbaik dengan lingkungan yang nyaman.
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className='text-[white] relative'>
					<div>
						<Image src={baner1} alt='baner1' width={1550} height={10} />
					</div>
					<div className='absolute top-0 px-[5%] flex flex-col gap-[5px] items-center justify-center h-[100%] md:px-[10%] w-[100%] md:gap-[20px]'>
						<h3 className='text-[30px] md:text-[45px]'>
							Temukan Rumah Impianmu
						</h3>
						<p className='text-[16px] text-center md:text-[25px] md:w-[60%]'>
							sekarang Anda dapat menghemat semua hal stres, waktu, dan biaya
							tersembunyi, dengan ratusan rumah untuk anda
						</p>
						<div className='bg-[#FFFFFFCC] text-[#00985B] p-[15px] rounded-[7px] flex flex-wrap gap-[10px] items-center'>
							<select className='outline-0'>
								<option>Tipe Rumah</option>
							</select>
							<select className='outline-0'>
								<option>Range Harga</option>
							</select>
							<b>cari berdasarkam lokasi, ID, Property</b>
							<button className='py-[10px] px-[20px] bg-[#00985B] text-[white] md:px-[30px]'>
								Cari
							</button>
						</div>
					</div>
				</section>
				<section className='px-[5%] flex flex-col gap-[20px] py-[60px] items-center md:px-[10%]'>
					<h4 className='text-[30px] text-[#048853]'>
						Rekomendasi Rumah Untuk Mu
					</h4>
					<div className='flex flex-col gap-[20px] md:flex-row md:flex-wrap'>
						{pro.map(el => (
							<div
								key={el.id}
								className='bg-[white] rounded-[7px] flex flex-col gap-[20px] md:w-[32%] hover:bg-[#00985B] hover:text-[white]'
							>
								<Image
									src={el.image}
									alt='image'
									width={700}
									height={10}
									className='rounded-[7px]'
								/>
								<div className='px-[7%] text-[19px]'>
									<b className='text-[25px]'>{el.b}</b>
									<p>{el.p}</p>
									<p className='text-[red]'>{el.pp}</p>
								</div>
								<Image src={el.img} alt='img' width={500} height={10} />
							</div>
						))}
					</div>
					<p>Lihat Lainnya...</p>
				</section>
				<section className='px-[5%] py-[40px] flex flex-col gap-[25px] md:px-[10%]'>
					<div className='flex justify-between items-center'>
						<h5 className='text-[#048853] text-[35px]'>Fitur Rumah</h5>
						<button className='text-[white] bg-[#048853] py-[10px] text-[20px] px-[25px]'>
							Lihat Semua..
						</button>
					</div>
					<div className='flex flex-col gap-[25px] md:flex-row'>
						{pro1.map(el => (
							<div
								key={el.id}
								className='relative overflow-hidden rounded-md group h-[550px]'
							>
								<Image
									src={el.img}
									alt='image'
									className='w-full h-full object-cover'
								/>
								<div className='absolute inset-0 bg-[#00000080] bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-center px-4'>
									<b className='text-2xl'>{el.b}</b>
									<p className='text-sm mb-2'>{el.p}</p>
									<b className='text-xl'>{el.bb}</b>
									<button className='mt-3 bg-[#048853] text-white px-4 py-2 rounded-md'>
										Lihat Rumah
									</button>
								</div>
							</div>
						))}
					</div>
				</section>
				<section className='relative w-full h-[600px] hidden md:block'>
					<Image
						src={footer}
						alt='footer'
						className='absolute inset-0 w-full h-full object-cover'
					/>
					<div className='absolute inset-0 bg-black/50 flex justify-between px-[10%] py-10 text-white items-center'>
						<div className='max-w-[40%] space-y-6'>
							<h2 className='text-[45px] font-bold leading-snug'>
								Butuh Konsultasi..?
								Silahkan kontak kami
								Kami Siap Membantu
							</h2>

							<div>
								<h4 className='font-bold mb-2'>Kontak</h4>
								<div className='space-y-3'>
									<div className='flex items-start gap-3'>
										<Image
											src={calendar}
											alt='calendar'
											width={24}
											height={24}
										/>
										<p>Jl. Pelajar Pejuang 123 Majalaya Bandung Indonesia</p>
									</div>
									<div className='flex items-start gap-3'>
										<Image src={phone} alt='phone' width={24} height={24} />
										<p>022-6545-2041</p>
									</div>
									<div className='flex items-start gap-3'>
										<Image src={email} alt='email' width={24} height={24} />
										<p>rumahimpian@gmail.com</p>
									</div>
								</div>
							</div>

							<div>
								<h4 className='font-bold mb-2'>Social Media</h4>
								<div className='flex items-center gap-4'>
									<Image src={facebook} alt='facebook' width={24} height={24} />
									<Image src={twitter} alt='twitter' width={24} height={24} />
									<Image src={insta} alt='insta' width={24} height={24} />
									<p>@Rumahimpian</p>
								</div>
							</div>
						</div>

						<div className='bg-white text-black rounded-md shadow-md p-8 w-[45%]'>
							<h3 className='text-green-600 text-2xl font-bold mb-4 text-center'>
								ada pertanyaan..?
							</h3>
							<form className='space-y-4'>
								<input
									type='email'
									placeholder='Masukan email anda disini...'
									className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
								/>
								<textarea
									placeholder='Pertanyaan Anda..'
									rows={4}
									className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
								></textarea>
								<button
									type='submit'
									className='bg-green-600 text-white w-full py-3 rounded-md font-semibold hover:bg-green-700'
								>
									Kirim
								</button>
							</form>
						</div>
					</div>
				</section>
        <footer className='text-[white] bg-[black] px-[5%] py-[40px] flex flex-col gap-[15px] items-center md:py-[65px] md:px-[10%] md:gap-[40px]'>
          <div className='flex flex-col items-center gap-[10px] md:flex-row md:justify-between md:w-[100%]'>
            <div className='flex items-center gap-[10px]'>
              <Image src={logo} alt='logo' width={30} height={10}/>
              <b>Rumah Impian</b>
            </div>
            <div>
              <b>Branda     Layanan     Fitur     Kontak     Masuk</b>
            </div>
          </div>
          <p className='text-[gray]'>Copyright bg Creative Academy All Right Reserved.</p>
        </footer>
			</main>
		</div>
		
		</>
	)
}
