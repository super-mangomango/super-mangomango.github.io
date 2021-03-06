import React, { FunctionComponent, ReactNode } from "react";
import Footer from "components/Footer";
import { Helmet } from "react-helmet";
import Gnb from "components/Common/Gnb";


type TemplateProps = {
    title: string
    description: string
    url: string
    image: string
    children: ReactNode
}

const Template : FunctionComponent<TemplateProps> = function ({
    title,
    description,
    url,
    image,
    children,
}) {
    return (
        <>
            <div className="helmet-wrapper">
                <Helmet>
                    <title>{title}</title>

                    <meta name="description" content={description} />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
                    <meta property="og:type" content="website" />
                    <link rel="icon" type="image/png" href="https://cdn.imweb.me/thumbnail/20210702/3d3a0ad07f586.png" sizes="32x32" />
                    <meta property="og:title" content={title} />
                    <meta property="og:description" content={description} />
                    <meta property="og:image" content={image} />
                    <meta property="og:url" content={url} />
                    <meta property="og:site_name" content={title} />

                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:title" content={title} />
                    <meta name="twitter:description" content={description} />
                    <meta name="twitter:image" content={image} />
                    <meta name="twitter:site" content="@사용자이름" />
                    <meta name="twitter:creator" content="@사용자이름" />
                </Helmet>
                <Gnb/>
                {children}
                <Footer/>
            </div>
        </>
    )
}


export default Template