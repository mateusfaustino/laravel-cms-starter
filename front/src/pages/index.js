import Head from 'next/head'
import Link from '../components/Link'
import { useAuth } from '@/hooks/auth'
import AppBar from '../components/AppBar'
import Button from '../components/Button'
export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })
    const { logout } = useAuth()
    return <>
        <AppBar>
            {user?<>

                <Button 
                    onClick={()=>logout()}
                    variant='outlined'
                >
                    Logout
                </Button>
            </>
            :<>
                <Link className='TopBar__Link' href='/login'>
                    Login
                </Link>
                <Link className='TopBar__Link' href='/register'>
                    Comece agora
                </Link>
            </>}
        </AppBar>
    </>

}


