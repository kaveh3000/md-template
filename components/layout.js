import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'
import Navbar from './navbar'
import navbarConfig from '@/components/app-config/navbar.json'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <Navbar navbar={navbarConfig} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
