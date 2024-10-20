import React from 'react';
import { IconUsers, IconTotalPoints, IconTotalTon } from '../icons/icons';
import { useTranslation } from 'react-i18next';

const InfoApp = () => {

    const { t, i18n } = useTranslation()

    return (
        <div className='wrapper-info-app'>
            <div>
                <span><IconUsers /></span>
                <div className='count'>150<small>k</small></div>
                <div className='desc-item'>{ t("total.users") }</div>
            </div>
            <div>
                <span><IconTotalPoints /></span>
                <div className='count'>6,000<small>kk</small></div>
                <div className='desc-item'>{ t("total.points") }</div>
            </div>
            <div>
                <span><IconTotalTon /></span>
                <div className='count d-flex justify-content-center align-items-center'>
                    <svg className='me-1' width="15" height="14" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1_2402)">
                            <path d="M8.5 0C4.082 0 0.5 3.582 0.5 8C0.5 12.418 4.082 16 8.5 16C12.918 16 16.5 12.418 16.5 8C16.5 3.582 12.918 0 8.5 0ZM5.768 4.46467H11.232C12.2353 4.46467 12.8733 5.55 12.3687 6.42467L8.996 12.268C8.94561 12.3549 8.87327 12.4271 8.78622 12.4772C8.69917 12.5274 8.60046 12.5538 8.5 12.5538C8.39954 12.5538 8.30083 12.5274 8.21378 12.4772C8.12673 12.4271 8.05439 12.3549 8.004 12.268L4.63267 6.42467C4.12733 5.54867 4.764 4.46467 5.768 4.46467ZM8.99733 5.462V10.5153L9.732 9.09667L11.5027 5.926C11.5298 5.87864 11.5439 5.82496 11.5436 5.77039C11.5433 5.71582 11.5287 5.66229 11.5011 5.61521C11.4735 5.56813 11.4339 5.52917 11.3865 5.50227C11.339 5.47537 11.2852 5.46148 11.2307 5.462H8.99733ZM5.76667 5.46333C5.71221 5.46274 5.65857 5.47654 5.61116 5.50332C5.56375 5.53011 5.52425 5.56893 5.49665 5.61588C5.46905 5.66282 5.45433 5.71622 5.45399 5.77067C5.45364 5.82513 5.46767 5.87871 5.49467 5.926L7.26667 9.09533L8.00133 10.5153V5.46333H5.76667Z" fill="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_2402">
                                <rect width="16" height="16" fill="white" transform="translate(0.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                    1,507
                    <small className='pt-2'>k</small></div>
                <div className='desc-item'>{ t("total.ton") }</div>
            </div>
        </div>
    );
};

export default InfoApp;