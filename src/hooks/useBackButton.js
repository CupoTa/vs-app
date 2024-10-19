import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import WebApp from '@twa-dev/sdk';

export function useBackButton(pathname) {

    const navigate = useNavigate()
    const location = useLocation()

    const backHandle = () => {
        if(location?.state?.parent != undefined){
            navigate(location?.state?.parent)
        } else {
            navigate('/')
        }
    }

    useEffect(() => {
        if (pathname == "/")
            WebApp.BackButton.hide()
        else
        WebApp.BackButton.show()

        WebApp.onEvent('backButtonClicked', backHandle)
        return () => {
            WebApp.offEvent('backButtonClicked', backHandle)
        }
        
    }, [pathname, backHandle])

};