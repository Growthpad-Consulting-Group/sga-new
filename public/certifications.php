<!DOCTYPE html>
<html lang="en">

<head>
    <?php Loader::element('header_required') ?>
    <?php echo $view->inc('elements/header_resources.php'); ?>

    <!-- styles -->
    <style>
        .main_container {
            background-color: #f5f5f5;
            min-height: 50vh;
            padding: 20px;
        }

        .new_request_quote {
            width: 70vw;
            position: fixed;
            background: white;
            z-index: 200;
        }

        .close {
            color: red;
            /* float: right; */
            font-size: 48px;
            font-weight: bold;
            cursor: pointer;
        }

        .close_popup {
            float: right;
        }
    </style>
</head>

<body>

    <div class="<?php echo $c->getPageWrapperClass() ?>">


        <?php echo $view->inc('elements/preloader.php'); ?>
        <?php echo $view->inc('elements/header.php'); ?>


        <div class="clear"></div>



        <?php echo $view->inc('elements/breadcrumb_box.php'); ?>

        <section class="padT100 padB40">
            <div class="about-us">
                <div class="container">
                    <div class="row">

                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="space-10"></div>
                            <p>SGA Security is proud to have obtained several certifications over the years. SGA
                                Security is (ISO) 18788:2015 certified and is a certified member of ICoCA, the highest
                                standard for security companies globally.</p>
                            <p>The company is a founder member of Kenya Security Industry Association (KSIA) and
                                Tanzania Security Industry Association (TSIA). SGA Security is also a member of the
                                Uganda Private Security Association (UPSA) as well as the South African Security
                                Association (SASA).
                            </p>
                        </div>
                    </div>

                    <div class="padT100">

                        <div class="row">
                            <div class="col-md-12 col-sm-12 col-xs-12">

                                <h2 class="title-center-main">Certificates, Licenses, and Recognition</h2>
                                <div class="space-10"></div>

                                <div class="container filtering">
                                    <div class="filter-cat row">
                                        <div class="col col-md-3 col-xs-6">
                                            <select class="form-control" id="countryFilter">
                                                <option value="cat-all">Filter by Country</option>
                                                <option value="cat-ke">Kenya</option>
                                                <option value="cat-tz">Tanzania</option>
                                                <option value="cat-ug">Uganda</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="space-20"></div>
                                    <div class="row filter-cat-results">

                                        <! -- Begin Kenya Cert -->

                                            <div class="filter-ke">
                                                <div class="col col-md-3 col-xs-6 f-cat" data-cat="cat-ke">
                                                    <h4 class="title-center"><u>ISO 18788</u></h4>
                                                    <div class="space-5"></div>

                                                    <div class="hide-popout-container">
                                                        <p class="iframe-not-loaded">Preview unavailable</p>
                                                        <iframe
                                                            src="//docs.google.com/viewer?url=https://www.sgasecurity.com/application/files/7916/8188/5715/ISO_18788_2015_certificate.pdf&embedded=true"></iframe>
                                                        <div class="hide-popout"></div>
                                                    </div>
                                                    <div class="space-10"></div>
                                                    <a href="https://www.sgasecurity.com/application/files/7916/8188/5715/ISO_18788_2015_certificate.pdf"
                                                        target="_blank"><button class="btn-center">Download</button></a>
                                                    <div class="space-10"></div>
                                                </div>

                                                <div class="col col-md-3 col-xs-6 f-cat" data-cat="cat-ke">
                                                    <h4 class="title-center"><u>ISO 9001</u></h4>
                                                    <div class="space-5"></div>
                                                    <div class="hide-popout-container">
                                                        <p class="iframe-not-loaded">Preview unavailable</p>
                                                        <iframe
                                                            src="//docs.google.com/viewer?url=https://www.sgasecurity.com/application/files/9716/8000/5535/ISO-9001.pdf&embedded=true"></iframe>
                                                        <div class="hide-popout"></div>
                                                    </div>

                                                    <div class="space-10"></div>
                                                    <a href="https://www.sgasecurity.com/application/files/9716/8000/5535/ISO-9001.pdf"
                                                        target="_blank"><button class="btn-center">Download</button></a>
                                                    <div class="space-10"></div>
                                                </div>

                                                <div class="col col-md-3 col-xs-6 f-cat" data-cat="cat-ke">
                                                    <h4 class="title-center"><u>ISO 14001</u></h4>
                                                    <div class="space-5"></div>
                                                    <div class="hide-popout-container">
                                                        <p class="iframe-not-loaded">Preview unavailable</p>
                                                        <iframe
                                                            src="//docs.google.com/viewer?url=https://www.sgasecurity.com/application/files/7716/8000/9363/ISO_14001.pdf&embedded=true"></iframe>
                                                        <div class="hide-popout"></div>
                                                    </div>
                                                    <div class="space-10"></div>
                                                    <a href="https://www.sgasecurity.com/application/files/7716/8000/9363/ISO_14001.pdf"
                                                        target="_blank"><button class="btn-center">Download</button></a>
                                                    <div class="space-10"></div>
                                                </div>

                                                <div class="col col-md-3 col-xs-6 f-cat" data-cat="cat-ke">
                                                    <h4 class="title-center"><u>ISO 45001</u></h4>
                                                    <div class="space-5"></div>
                                                    <div class="hide-popout-container">
                                                        <p class="iframe-not-loaded">Preview unavailable</p>
                                                        <iframe
                                                            src="//docs.google.com/viewer?url=https://www.sgasecurity.com/application/files/9916/8000/9364/ISO_45001.pdf&embedded=true"></iframe>
                                                        <div class="hide-popout"></div>
                                                    </div>
                                                    <div class="space-10"></div>
                                                    <a href="https://www.sgasecurity.com/application/files/9916/8000/9364/ISO_45001.pdf"
                                                        target="_blank"><button class="btn-center">Download</button></a>
                                                    <div class="space-10"></div>
                                                </div>

                                                <div class="col col-md-3 col-xs-6 f-cat" data-cat="cat-ke">
                                                    <h4 class="title-center"><u>ICoCA</u></h4>
                                                    <div class="space-5"></div>
                                                    <div class="hide-popout-container">
                                                        <p class="iframe-not-loaded">Preview unavailable</p>
                                                        <iframe
                                                            src="//docs.google.com/viewer?url=https://www.sgasecurity.com/application/files/7717/6894/5928/ICoCA_Certified_Member_Recertificate_SGA_Certificate_1_2_1.pdf&embedded=true"></iframe>
                                                        <div class="hide-popout"></div>
                                                    </div>
                                                    <div class="space-10"></div>
                                                    <a href="https://www.sgasecurity.com/application/files/7717/6894/5928/ICoCA_Certified_Member_Recertificate_SGA_Certificate_1_2_1.pdf"
                                                        target="_blank"><button class="btn-center">Download</button></a>
                                                    <div class="space-10"></div>
                                                </div>

                                                <div class="col col-md-3 col-xs-6 f-cat" data-cat="cat-ke">
                                                    <h4 class="title-center"><u>PSRA</u></h4>
                                                    <div class="space-5"></div>
                                                    <div class="hide-popout-container">
                                                        <p class="iframe-not-loaded">Preview unavailable</p>
                                                        <iframe
                                                            src="//docs.google.com/viewer?url=https://www.sgasecurity.com/application/files/9816/8188/6489/SGA_K-PSRA_Registration_Certificate_2022-2027_001.pdf&embedded=true"></iframe>
                                                        <div class="hide-popout"></div>
                                                    </div>
                                                    <div class="space-10"></div>
                                                    <a href="https://www.sgasecurity.com/application/files/9816/8188/6489/SGA_K-PSRA_Registration_Certificate_2022-2027_001.pdf"
                                                        target="_blank"><button class="btn-center">Download</button></a>
                                                    <div class="space-10"></div>
                                                </div>

                                                <div class="col col-md-3 col-xs-6 f-cat" data-cat="cat-ke">
                                                    <h4 class="title-center"><u>KASA 2023</u></h4>
                                                    <div class="space-5"></div>
                                                    <div class="hide-popout-container">
                                                        <p class="iframe-not-loaded">Preview unavailable</p>
                                                        <iframe
                                                            src="//docs.google.com/viewer?url=https://www.sgasecurity.com/application/files/2916/8188/7806/KASA_certificate-2023_rotated.pdf&embedded=true"></iframe>
                                                        <div class="hide-popout"></div>
                                                    </div>
                                                    <div class="space-10"></div>
                                                    <a href="https://www.sgasecurity.com/application/files/2916/8188/7806/KASA_certificate-2023_rotated.pdf"
                                                        target="_blank"><button class="btn-center">Download</button></a>
                                                    <div class="space-10"></div>
                                                </div>

                                                <div class="col col-md-3 col-xs-6 f-cat" data-cat="cat-ke">
                                                    <h4 class="title-center"><u>KSIA 2023</u></h4>
                                                    <div class="space-5"></div>
                                                    <div class="hide-popout-container">
                                                        <p class="iframe-not-loaded">Preview unavailable</p>
                                                        <iframe
                                                            src="//docs.google.com/gview?url=https://sgasecurity.com/application/files/2116/8000/9364/KSIA_2023.pdf&embedded=true"></iframe>
                                                        <div class="hide-popout"></div>
                                                    </div>
                                                    <div class="space-10"></div>
                                                    <a href="https://www.sgasecurity.com/application/files/2116/8000/9364/KSIA_2023.pdf"
                                                        target="_blank"><button class="btn-center">Download</button></a>
                                                    <div class="space-10"></div>
                                                </div>

                                                <div class="col col-md-3 col-xs-6 f-cat" data-cat="cat-ke">
                                                    <h4 class="title-center"><u>CAK</u></h4>
                                                    <div class="space-5"></div>
                                                    <div class="hide-popout-container">
                                                        <p class="iframe-not-loaded">Preview unavailable</p>
                                                        <iframe
                                                            src="//docs.google.com/viewer?url=https://www.sgasecurity.com/application/files/6816/8190/7269/2022-CAK_LICENCE.pdf&embedded=true"></iframe>
                                                        <div class="hide-popout"></div>
                                                    </div>
                                                    <div class="space-10"></div>
                                                    <a href="https://www.sgasecurity.com/application/files/6816/8190/7269/2022-CAK_LICENCE.pdf"
                                                        target="_blank"><button class="btn-center">Download</button></a>
                                                    <div class="space-10"></div>
                                                </div>

                                                <div class="col col-md-3 col-xs-6 f-cat" data-cat="cat-ke">
                                                    <h4 class="title-center"><u>KCAA</u></h4>
                                                    <div class="space-5"></div>
                                                    <div class="hide-popout-container">
                                                        <p class="iframe-not-loaded">Preview unavailable</p>
                                                        <iframe
                                                            src="//docs.google.com/viewer?url=https://www.sgasecurity.com/application/files/5916/8190/7362/KCAA_DOCS_2022-2024_.pdf&embedded=true"></iframe>
                                                        <div class="hide-popout"></div>
                                                    </div>
                                                    <div class="space-10"></div>
                                                    <a href="https://www.sgasecurity.com/application/files/5916/8190/7362/KCAA_DOCS_2022-2024_.pdf"
                                                        target="_blank"><button class="btn-center">Download</button></a>
                                                    <div class="space-10"></div>
                                                </div>

                                                <div class="col col-md-3 col-xs-6 f-cat" data-cat="cat-ke">
                                                    <h4 class="title-center"><u>NITA</u></h4>
                                                    <div class="space-5"></div>
                                                    <div class="hide-popout-container">
                                                        <p class="iframe-not-loaded">Preview unavailable</p>
                                                        <iframe
                                                            src="//docs.google.com/viewer?url=https://www.sgasecurity.com/application/files/2816/8190/7440/NITA_Licence_2020-2021_001.pdf&embedded=true"></iframe>
                                                        <div class="hide-popout"></div>
                                                    </div>
                                                    <div class="space-10"></div>
                                                    <a href="https://www.sgasecurity.com/application/files/2816/8190/7440/NITA_Licence_2020-2021_001.pdf"
                                                        target="_blank"><button class="btn-center">Download</button></a>
                                                    <div class="space-10"></div>
                                                </div>

                                                <div class="col col-md-3 col-xs-6 f-cat" data-cat="cat-ke">
                                                    <h4 class="title-center"><u>SASA</u></h4>
                                                    <div class="space-5"></div>
                                                    <div class="hide-popout-container">
                                                        <p class="iframe-not-loaded">Preview unavailable</p>
                                                        <iframe
                                                            src="//docs.google.com/viewer?url=https://www.sgasecurity.com/application/files/6716/8190/7516/SASA_Membership_2022_to_2023.pdf&embedded=true"></iframe>
                                                        <div class="hide-popout"></div>
                                                    </div>
                                                    <div class="space-10"></div>
                                                    <a href="https://www.sgasecurity.com/application/files/6716/8190/7516/SASA_Membership_2022_to_2023.pdf"
                                                        target="_blank"><button class="btn-center">Download</button></a>
                                                    <div class="space-10"></div>
                                                </div>

                                                <div class="col col-md-3 col-xs-6 f-cat" data-cat="cat-ke">
                                                    <h4 class="title-center"><u>SGA 2023</u></h4>
                                                    <div class="space-5"></div>
                                                    <div class="hide-popout-container">
                                                        <p class="iframe-not-loaded">Preview unavailable</p>
                                                        <iframe
                                                            src="//docs.google.com/viewer?url=https://www.sgasecurity.com/application/files/2716/8190/7570/SGA_cert_2023.pdf&embedded=true"></iframe>
                                                        <div class="hide-popout"></div>
                                                    </div>
                                                    <div class="space-10"></div>
                                                    <a href="https://www.sgasecurity.com/application/files/2716/8190/7570/SGA_cert_2023.pdf"
                                                        target="_blank"><button class="btn-center">Download</button></a>
                                                    <div class="space-10"></div>
                                                </div>

                                                <div class="col col-md-3 col-xs-6 f-cat" data-cat="cat-ke">
                                                    <h4 class="title-center"><u>NEMA</u></h4>
                                                    <div class="space-5"></div>
                                                    <div class="hide-popout-container">
                                                        <p class="iframe-not-loaded">Preview unavailable</p>
                                                        <iframe
                                                            src="//docs.google.com/viewer?url=https://www.sgasecurity.com/application/files/7616/8190/7626/SGA_NEMA_CERTIFICATE_2021.pdf&embedded=true"></iframe>
                                                        <div class="hide-popout"></div>
                                                    </div>
                                                    <div class="space-10"></div>
                                                    <a href="https://www.sgasecurity.com/application/files/7616/8190/7626/SGA_NEMA_CERTIFICATE_2021.pdf"
                                                        target="_blank"><button class="btn-center">Download</button></a>
                                                    <div class="space-10"></div>
                                                </div>

                                            </div>

                                            <! -- End Kenya Cert -->

                                                <div class="filter-tanzania">
                                                    <! -- Begin Tanzania Cert -->
                                                        <!-- NEW CERTIFICATES start -->
                                                        <!-- EMS -->
                                                        <div class="col col-md-3 col-xs-6 f-cat" data-cat="cat-tz">
                                                            <h4 class="title-center"><u>ISO 14001</u></h4>
                                                            <div class="space-5"></div>
                                                            <div class="hide-popout-container">
                                                                <p class="iframe-not-loaded">Preview unavailable</p>
                                                                <iframe
                                                                    src="//docs.google.com/viewer?url=https://www.sgasecurity.com/application/files/3316/9088/5555/EMS.pdf&embedded=true"></iframe>
                                                                <div class="hide-popout"></div>
                                                            </div>
                                                            <div class="space-10"></div>
                                                            <a href="https://www.sgasecurity.com/application/files/3316/9088/5555/EMS.pdf"
                                                                target="_blank"><button
                                                                    class="btn-center">Download</button></a>
                                                            <div class="space-10"></div>
                                                        </div>

                                                        <!-- OHS1 -->
                                                        <div class="col col-md-3 col-xs-6 f-cat" data-cat="cat-tz">
                                                            <h4 class="title-center"><u>ISO 45001</u></h4>
                                                            <div class="space-5"></div>
                                                            <div class="hide-popout-container">
                                                                <p class="iframe-not-loaded">Preview unavailable</p>
                                                                <iframe
                                                                    src="//docs.google.com/viewer?url=https://www.sgasecurity.com/application/files/5016/9088/5887/OHS1.pdf&embedded=true"></iframe>
                                                                <div class="hide-popout"></div>
                                                            </div>
                                                            <div class="space-10"></div>
                                                            <a href="https://www.sgasecurity.com/application/files/5016/9088/5887/OHS1.pdf"
                                                                target="_blank"><button
                                                                    class="btn-center">Download</button></a>
                                                            <div class="space-10"></div>
                                                        </div>

                                                        <!-- QMS2 -->
                                                        <div class="col col-md-3 col-xs-6 f-cat" data-cat="cat-tz">
                                                            <h4 class="title-center"><u>ISO 9001</u></h4>
                                                            <div class="space-5"></div>
                                                            <div class="hide-popout-container">
                                                                <p class="iframe-not-loaded">Preview unavailable</p>
                                                                <iframe
                                                                    src="//docs.google.com/viewer?url=https://www.sgasecurity.com/application/files/9716/9088/6037/QMS2.pdf&embedded=true"></iframe>
                                                                <div class="hide-popout"></div>
                                                            </div>
                                                            <div class="space-10"></div>
                                                            <a href="https://www.sgasecurity.com/application/files/9716/9088/6037/QMS2.pdf"
                                                                target="_blank"><button
                                                                    class="btn-center">Download</button></a>
                                                            <div class="space-10"></div>
                                                        </div>

                                                        <!-- SOMS3 -->
                                                        <div class="col col-md-3 col-xs-6 f-cat" data-cat="cat-tz">
                                                            <h4 class="title-center"><u>ISO 18788</u></h4>
                                                            <div class="space-5"></div>
                                                            <div class="hide-popout-container">
                                                                <p class="iframe-not-loaded">Preview unavailable</p>
                                                                <iframe
                                                                    src="//docs.google.com/viewer?url=https://www.sgasecurity.com/application/files/9216/9088/6181/SOMS3.pdf&embedded=true"></iframe>
                                                                <div class="hide-popout"></div>
                                                            </div>
                                                            <div class="space-10"></div>
                                                            <a href="https://www.sgasecurity.com/application/files/9216/9088/6181/SOMS3.pdf"
                                                                target="_blank"><button
                                                                    class="btn-center">Download</button></a>
                                                            <div class="space-10"></div>
                                                        </div>
                                                        <!-- NEW CERTIFICATES end -->

                                                        <div class="col col-md-3 col-xs-6 f-cat" data-cat="cat-tz">
                                                            <h4 class="title-center"><u>ISO 18788</u></h4>
                                                            <div class="space-5"></div>
                                                            <div class="hide-popout-container">
                                                                <p class="iframe-not-loaded">Preview unavailable</p>
                                                                <iframe
                                                                    src="//docs.google.com/viewer?url=https://www.sgasecurity.com/application/files/3316/8001/1670/ISO_18788_SOMS.pdf&embedded=true"></iframe>
                                                                <div class="hide-popout"></div>
                                                            </div>
                                                            <div class="space-10"></div>
                                                            <a href="https://www.sgasecurity.com/application/files/3316/8001/1670/ISO_18788_SOMS.pdf"
                                                                target="_blank"><button
                                                                    class="btn-center">Download</button></a>
                                                            <div class="space-10"></div>
                                                        </div>

                                                        <div class="col col-md-3 col-xs-6 f-cat" data-cat="cat-tz">
                                                            <h4 class="title-center"><u>ICoCA</u></h4>
                                                            <div class="space-5"></div>
                                                            <div class="hide-popout-container">
                                                                <p class="iframe-not-loaded">Preview unavailable</p>
                                                                <iframe
                                                                    src="//docs.google.com/viewer?url=https://www.sgasecurity.com/application/files/9116/8189/1776/ICoCA_Certificate_SGA_Security_rotated.pdf&embedded=true"></iframe>
                                                                <div class="hide-popout"></div>
                                                            </div>
                                                            <div class="space-10"></div>
                                                            <a href="https://www.sgasecurity.com/application/files/9116/8189/1776/ICoCA_Certificate_SGA_Security_rotated.pdf"
                                                                target="_blank"><button
                                                                    class="btn-center">Download</button></a>
                                                            <div class="space-10"></div>
                                                        </div>

                                                        <div class="col col-md-3 col-xs-6 f-cat" data-cat="cat-tz">
                                                            <h4 class="title-center"><u>LATRA</u></h4>
                                                            <div class="space-5"></div>
                                                            <div class="hide-popout-container">
                                                                <p class="iframe-not-loaded">Preview unavailable</p>
                                                                <iframe
                                                                    src="//docs.google.com/viewer?url=https://www.sgasecurity.com/application/files/6316/8189/1969/Certificate-_LATRA_rotated.pdf&embedded=true"></iframe>
                                                                <div class="hide-popout"></div>
                                                            </div>
                                                            <div class="space-10"></div>
                                                            <a href="https://www.sgasecurity.com/application/files/6316/8189/1969/Certificate-_LATRA_rotated.pdf"
                                                                target="_blank"><button
                                                                    class="btn-center">Download</button></a>
                                                            <div class="space-10"></div>
                                                        </div>

                                                        <div class="col col-md-3 col-xs-6 f-cat" data-cat="cat-tz">
                                                            <h4 class="title-center"><u>CIT Business Licence 27001</u>
                                                            </h4>
                                                            <div class="space-5"></div>
                                                            <div class="hide-popout-container">
                                                                <p class="iframe-not-loaded">Preview unavailable</p>
                                                                <iframe
                                                                    src="//docs.google.com/viewer?url=https://www.sgasecurity.com/application/files/9916/8001/1949/SGA_CIT__business_licence.pdf&embedded=true"></iframe>
                                                                <div class="hide-popout"></div>
                                                            </div>
                                                            <div class="space-10"></div>
                                                            <a href="https://www.sgasecurity.com/application/files/9916/8001/1949/SGA_CIT__business_licence.pdf"
                                                                target="_blank"><button
                                                                    class="btn-center">Download</button></a>
                                                            <div class="space-10"></div>
                                                        </div>

                                                        <div class="col col-md-3 col-xs-6 f-cat" data-cat="cat-tz">
                                                            <h4 class="title-center"><u>CIT Courier</u></h4>
                                                            <div class="space-5"></div>
                                                            <div class="hide-popout-container">
                                                                <p class="iframe-not-loaded">Preview unavailable</p>
                                                                <iframe
                                                                    src="//docs.google.com/viewer?url=https://www.sgasecurity.com/application/files/7416/8001/1952/SGA_CIT__Courier__2023.pdf&embedded=true"></iframe>
                                                                <div class="hide-popout"></div>
                                                            </div>
                                                            <div class="space-10"></div>
                                                            <a href="https://www.sgasecurity.com/application/files/7416/8001/1952/SGA_CIT__Courier__2023.pdf"
                                                                target="_blank"><button
                                                                    class="btn-center">Download</button></a>
                                                            <div class="space-10"></div>
                                                        </div>

                                                        <div class="col col-md-3 col-xs-6 f-cat" data-cat="cat-tz">
                                                            <h4 class="title-center"><u>SASA Membership 2022-2023</u>
                                                            </h4>
                                                            <div class="space-5"></div>
                                                            <div class="hide-popout-container">
                                                                <p class="iframe-not-loaded">Preview unavailable</p>
                                                                <iframe
                                                                    src="//docs.google.com/viewer?url=https://www.sgasecurity.com/application/files/9016/8001/1969/SASA_Membership_2022_to_2023.pdf&embedded=true"></iframe>
                                                                <div class="hide-popout"></div>
                                                            </div>
                                                            <div class="space-10"></div>
                                                            <a href="https://www.sgasecurity.com/application/files/9016/8001/1969/SASA_Membership_2022_to_2023.pdf"
                                                                target="_blank"><button
                                                                    class="btn-center">Download</button></a>
                                                            <div class="space-10"></div>
                                                        </div>

                                                        <div class="col col-md-3 col-xs-6 f-cat" data-cat="cat-tz">
                                                            <h4 class="title-center"><u>Business Licence 2022-2023</u>
                                                            </h4>
                                                            <div class="space-5"></div>
                                                            <div class="hide-popout-container">
                                                                <p class="iframe-not-loaded">Preview unavailable</p>
                                                                <iframe
                                                                    src="//docs.google.com/viewer?url=https://www.sgasecurity.com/application/files/7916/8001/1971/SGA_SECURITY_-_BUSINESS_LICENSEI_SELLING__FIRE_FIGHTING_2022_-2023.pdf&embedded=true"></iframe>
                                                                <div class="hide-popout"></div>
                                                            </div>
                                                            <div class="space-10"></div>
                                                            <a href="https://www.sgasecurity.com/application/files/7916/8001/1971/SGA_SECURITY_-_BUSINESS_LICENSEI_SELLING__FIRE_FIGHTING_2022_-2023.pdf"
                                                                target="_blank"><button
                                                                    class="btn-center">Download</button></a>
                                                            <div class="space-10"></div>
                                                        </div>

                                                        <div class="col col-md-3 col-xs-6 f-cat" data-cat="cat-tz">
                                                            <h4 class="title-center"><u>TCRA</u></h4>
                                                            <div class="space-5"></div>
                                                            <div class="hide-popout-container">
                                                                <p class="iframe-not-loaded">Preview unavailable</p>
                                                                <iframe
                                                                    src="//docs.google.com/viewer?url=https://www.sgasecurity.com/application/files/8516/8001/1973/TCRA_-_Installation_systems_licence_2021-2024.pdf&embedded=true"></iframe>
                                                                <div class="hide-popout"></div>
                                                            </div>
                                                            <div class="space-10"></div>
                                                            <a href="https://www.sgasecurity.com/application/files/8516/8001/1973/TCRA_-_Installation_systems_licence_2021-2024.pdf"
                                                                target="_blank"><button
                                                                    class="btn-center">Download</button></a>
                                                            <div class="space-10"></div>
                                                        </div>

                                                        <div class="col col-md-3 col-xs-6 f-cat" data-cat="cat-tz">
                                                            <h4 class="title-center"><u>TSIA</u></h4>
                                                            <div class="space-5"></div>
                                                            <div class="hide-popout-container">
                                                                <p class="iframe-not-loaded">Preview unavailable</p>
                                                                <iframe
                                                                    src="//docs.google.com/viewer?url=https://www.sgasecurity.com/application/files/2416/8189/2154/TSIA_-_SGA_Security_rotated.pdf&embedded=true"></iframe>
                                                                <div class="hide-popout"></div>
                                                            </div>
                                                            <div class="space-10"></div>
                                                            <a href="https://www.sgasecurity.com/application/files/2416/8189/2154/TSIA_-_SGA_Security_rotated.pdf"
                                                                target="_blank"><button
                                                                    class="btn-center">Download</button></a>
                                                            <div class="space-10"></div>
                                                        </div>
                                                </div>

                                                <! -- End Tanzania Cert -->

                                                    <div class="filter-uganda">
                                                        <! -- Begin Uganda Cert -->

                                                            <div class="col col-md-3 col-xs-6 f-cat" data-cat="cat-ug">
                                                                <h4 class="title-center"><u>ISO 18788</u></h4>
                                                                <div class="space-5"></div>
                                                                <div class="hide-popout-container">
                                                                    <p class="iframe-not-loaded">Preview unavailable</p>
                                                                    <iframe
                                                                        src="//docs.google.com/viewer?url=https://www.sgasecurity.com/application/files/1916/8191/5979/ISO_18788_2015_certificate_1.pdf&embedded=true"></iframe>
                                                                    <div class="hide-popout"></div>
                                                                </div>
                                                                <div class="space-10"></div>
                                                                <a href="https://www.sgasecurity.com/application/files/1916/8191/5979/ISO_18788_2015_certificate_1.pdf"
                                                                    target="_blank"><button
                                                                        class="btn-center">Download</button></a>
                                                                <div class="space-10"></div>
                                                            </div>

                                                            <div class="col col-md-3 col-xs-6 f-cat" data-cat="cat-ug">
                                                                <h4 class="title-center"><u>ISO 9001</u></h4>
                                                                <div class="space-5"></div>
                                                                <div class="hide-popout-container">
                                                                    <p class="iframe-not-loaded">Preview unavailable</p>
                                                                    <iframe
                                                                        src="//docs.google.com/viewer?url=https://www.sgasecurity.com/application/files/9616/8001/0376/ISO_9001_-_SECURITY_GROUP_UGANDA.pdf&embedded=true"></iframe>
                                                                    <div class="hide-popout"></div>
                                                                </div>
                                                                <div class="space-10"></div>
                                                                <a href="https://www.sgasecurity.com/application/files/9616/8001/0376/ISO_9001_-_SECURITY_GROUP_UGANDA.pdf"
                                                                    target="_blank"><button
                                                                        class="btn-center">Download</button></a>
                                                                <div class="space-10"></div>
                                                            </div>

                                                            <div class="col col-md-3 col-xs-6 f-cat" data-cat="cat-ug">
                                                                <h4 class="title-center"><u>ISO 14001</u></h4>
                                                                <div class="space-5"></div>
                                                                <div class="hide-popout-container">
                                                                    <p class="iframe-not-loaded">Preview unavailable</p>
                                                                    <iframe
                                                                        src="//docs.google.com/viewer?url=https://www.sgasecurity.com/application/files/4116/8001/0376/ISO_14001_-SECURITY_GROUP_UGAND._.pdf&embedded=true"></iframe>
                                                                    <div class="hide-popout"></div>
                                                                </div>
                                                                <div class="space-10"></div>
                                                                <a href="https://www.sgasecurity.com/application/files/4116/8001/0376/ISO_14001_-SECURITY_GROUP_UGAND._.pdf"
                                                                    target="_blank"><button
                                                                        class="btn-center">Download</button></a>
                                                                <div class="space-10"></div>
                                                            </div>

                                                            <div class="col col-md-3 col-xs-6 f-cat" data-cat="cat-ug">
                                                                <h4 class="title-center"><u>ISO 22301</u></h4>
                                                                <div class="space-5"></div>
                                                                <div class="hide-popout-container">
                                                                    <p class="iframe-not-loaded">Preview unavailable</p>
                                                                    <iframe
                                                                        src="//docs.google.com/viewer?url=https://www.sgasecurity.com/application/files/8916/8001/0376/ISO_22301-_SECURITY_GROUP_UGANDA_LIMITED.pdf&embedded=true"></iframe>
                                                                    <div class="hide-popout"></div>
                                                                </div>

                                                                <div class="space-10"></div>
                                                                <a href="https://www.sgasecurity.com/application/files/8916/8001/0376/ISO_22301-_SECURITY_GROUP_UGANDA_LIMITED.pdf"
                                                                    target="_blank"><button
                                                                        class="btn-center">Download</button></a>
                                                                <div class="space-10"></div>
                                                            </div>

                                                            <div class="col col-md-3 col-xs-6 f-cat" data-cat="cat-ug">
                                                                <h4 class="title-center"><u>ISO 27001</u></h4>
                                                                <div class="space-5"></div>
                                                                <div class="hide-popout-container">
                                                                    <p class="iframe-not-loaded">Preview unavailable</p>
                                                                    <iframe
                                                                        src="//docs.google.com/viewer?url=https://www.sgasecurity.com/application/files/4416/8001/0376/ISO_27001_-_SECURITY_GROUP_UGANDA_LIMITED.pdf&embedded=true"></iframe>
                                                                    <div class="hide-popout"></div>
                                                                </div>
                                                                <div class="space-10"></div>
                                                                <a href="https://www.sgasecurity.com/application/files/4416/8001/0376/ISO_27001_-_SECURITY_GROUP_UGANDA_LIMITED.pdf"
                                                                    target="_blank"><button
                                                                        class="btn-center">Download</button></a>
                                                                <div class="space-10"></div>
                                                            </div>

                                                            <div class="col col-md-3 col-xs-6 f-cat" data-cat="cat-ug">
                                                                <h4 class="title-center"><u>ISO 45001</u></h4>
                                                                <div class="space-5"></div>
                                                                <div class="hide-popout-container">
                                                                    <p class="iframe-not-loaded">Preview unavailable</p>
                                                                    <iframe
                                                                        src="//docs.google.com/viewer?url=https://www.sgasecurity.com/application/files/6716/8001/0376/ISO_45001-SECURITY_GROUP_UGA._.pdf&embedded=true"></iframe>
                                                                    <div class="hide-popout"></div>
                                                                </div>
                                                                <div class="space-10"></div>
                                                                <a href="https://www.sgasecurity.com/application/files/6716/8001/0376/ISO_45001-SECURITY_GROUP_UGA._.pdf"
                                                                    target="_blank"><button
                                                                        class="btn-center">Download</button></a>
                                                                <div class="space-10"></div>
                                                            </div>

                                                            <div class="col col-md-3 col-xs-6 f-cat" data-cat="cat-ug">
                                                                <h4 class="title-center"><u>ICoCA</u></h4>
                                                                <div class="space-5"></div>
                                                                <div class="hide-popout-container">
                                                                    <p class="iframe-not-loaded">Preview unavailable</p>
                                                                    <iframe
                                                                        src="//docs.google.com/viewer?url=https://www.sgasecurity.com/application/files/5716/8189/2332/ICoCA_Certificate_SGA_Security_rotated_1.pdf&embedded=true"></iframe>
                                                                    <div class="hide-popout"></div>
                                                                </div>
                                                                <div class="space-10"></div>
                                                                <a href="https://www.sgasecurity.com/application/files/5716/8189/2332/ICoCA_Certificate_SGA_Security_rotated_1.pdf"
                                                                    target="_blank"><button
                                                                        class="btn-center">Download</button></a>
                                                                <div class="space-10"></div>
                                                            </div>

                                                            <div class="col col-md-3 col-xs-6 f-cat" data-cat="cat-ug">
                                                                <h4 class="title-center"><u>PPDA</u></h4>
                                                                <div class="space-5"></div>
                                                                <div class="hide-popout-container">
                                                                    <p class="iframe-not-loaded">Preview unavailable</p>
                                                                    <iframe
                                                                        src="//docs.google.com/viewer?url=https://www.sgasecurity.com/application/files/5816/8001/0376/PPDA_Certificate.pdf&embedded=true"></iframe>
                                                                    <div class="hide-popout"></div>
                                                                </div>
                                                                <div class="space-10"></div>
                                                                <a href="https://www.sgasecurity.com/application/files/5816/8001/0376/PPDA_Certificate.pdf"
                                                                    target="_blank"><button
                                                                        class="btn-center">Download</button></a>
                                                                <div class="space-10"></div>
                                                            </div>

                                                            <div class="col col-md-3 col-xs-6 f-cat" data-cat="cat-ug">
                                                                <h4 class="title-center"><u>Workplace Registration</u>
                                                                </h4>
                                                                <div class="space-5"></div>
                                                                <div class="hide-popout-container">
                                                                    <p class="iframe-not-loaded">Preview unavailable</p>
                                                                    <iframe
                                                                        src="//docs.google.com/viewer?url=https://www.sgasecurity.com/application/files/1216/8001/0376/Workplace_Registration_Certificate.pdf&embedded=true"></iframe>
                                                                    <div class="hide-popout"></div>
                                                                </div>
                                                                <div class="space-10"></div>
                                                                <a href="https://www.sgasecurity.com/application/files/1216/8001/0376/Workplace_Registration_Certificate.pdf"
                                                                    target="_blank"><button
                                                                        class="btn-center">Download</button></a>
                                                                <div class="space-10"></div>
                                                            </div>
                                                    </div>
                                                    <! -- End Uganda Cert -->

                                    </div>
                                    <div class="space-60"></div>
                                </div>
                                <!-- partial -->
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>



        <div class="clear"></div>
        <?php echo $view->inc('elements/footer.php'); ?>
        <div class="clear"></div>

        <?php echo $view->inc('elements/footer_resources.php'); ?>

    </div>
    <?php Loader::element('footer_required') ?>
</body>

<script>
    const countryFilter = document.getElementById("countryFilter");
    const filterKenyaDiv = document.querySelector(".filter-ke");
    const filterTanzaniaDiv = document.querySelector(".filter-tanzania");
    const filterUgandaDiv = document.querySelector(".filter-uganda");

    countryFilter.addEventListener("change", function () {
        const selectedValue = countryFilter.value;

        if (selectedValue === "cat-ke") {
            filterKenyaDiv.style.display = "flex";
            filterKenyaDiv.style.flexWrap = "wrap";
            filterKenyaDiv.style.justifyContent = "center";
            filterKenyaDiv.style.alignItems = "center";

        } else if (selectedValue === "cat-tz") {
            filterTanzaniaDiv.style.display = "flex";
            filterTanzaniaDiv.style.flexWrap = "wrap";
            filterTanzaniaDiv.style.justifyContent = "center";
            filterTanzaniaDiv.style.alignItems = "center";
        } else if (selectedValue === "cat-ug") {
            filterUgandaDiv.style.display = "flex";
            filterUgandaDiv.style.flexWrap = "wrap";
            filterUgandaDiv.style.justifyContent = "center";
            filterUgandaDiv.style.alignItems = "center";
        }
    });
</script>

</html>