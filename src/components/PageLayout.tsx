import React from 'react';
import { BackButton } from './BackButton';
import '../styles/PageLayout.css';

interface Props {
    children: React.ReactNode;
    title?: string;
    buttonBack?: boolean;
}

export const PageLayout = ({ children, title, buttonBack = false }: Props) => {
    return (
        <>
            <div className="page-layout-container">
                <div className="page-layout-elements">
                    <div className="space-content-page">
                        <div className="title-page flex items-center">
                            {buttonBack && (<BackButton />)} {title}
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}