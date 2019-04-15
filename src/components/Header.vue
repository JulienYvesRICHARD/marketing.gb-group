<template>
<nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
        <a class="navbar-brand" href="#"><img src="" height="35px"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav mr-auto">
        &nbsp;
        </ul>
        <ul class="navbar-nav">
            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="gbgroup" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src="" width="25"> GB Group
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="gbgroup">
                <a class="dropdown-item" href="/#Logos">Logos</a>
                <a class="dropdown-item" href="/#branding">Branding</a>
                <a class="dropdown-item" href="/#sound">Audio</a>
                <a class="dropdown-item" href="/#introOutro">Video Intro/Outro</a>
                <a class="dropdown-item" href="/#link">Links</a>
                <a class="dropdown-item" href="#gbgroupSubsidiaries">Subsidiaries</a>
                <a class="dropdown-item" href="#gbgroupPressreleases">Press Releases</a>
                <a class="dropdown-item" href="#gbgroupPhotos">Photos</a>
                <a class="dropdown-item" href="#gbgroupPrintgraphiccharter">Print Graphic Charter</a>
                <a class="dropdown-item" href="#gbgroupPowerpointtemplate">Powerpoint Template</a>
                <a class="dropdown-item" href="#gbgroupIcons">Icons</a>
            </div>
            </li>
            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="gregoirebesson" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src="" width="25"> Grégoire Besson
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="gregoirebesson">
                <a class="dropdown-item" href="#gregoirebessonLogos">Logos</a>
                <a class="dropdown-item" href="#gregoirebessonBranding">Branding</a>
                <a class="dropdown-item" href="#gregoirebessonVideoInOut">Video Intro/Outro</a>
                <a class="dropdown-item" href="#gregoirebessonLinks">Links</a>
                <a class="dropdown-item" href="#gregoirebessonPhotos">Photos</a>
                <a class="dropdown-item" href="#gregoirebessonLeaflets">Leaflets</a>
                <a class="dropdown-item" href="#gregoirebessonVideos">Videos</a>
                <a class="dropdown-item" href="#gregoirebessonPricelists">Pricelists</a>
                <a class="dropdown-item" href="#gregoirebessonPosters">Posters</a>
                <a class="dropdown-item" href="https://parts.gb-group.co" target="_blank">Parts</a>
            </div>
            </li>
            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="rabe" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src="" width="25"> Rabe
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="rabe">
                <a class="dropdown-item" href="#rabeLogos">Logos</a>
                <a class="dropdown-item" href="#rabeBranding">Branding</a>
                <a class="dropdown-item" href="#rabeVideoInOut">Video Intro/Outro</a>
                <a class="dropdown-item" href="#rabeLinks">Links</a>
                <a class="dropdown-item" href="#rabePhotos">Photos</a>
                <a class="dropdown-item" href="#rabeLeaflets">Leaflets</a>
                <a class="dropdown-item" href="#rabeVideos">Videos</a>
                <a class="dropdown-item" href="#rabePricelists">Pricelists</a>
                <a class="dropdown-item" href="https://parts.gb-group.co" target="_blank">Parts</a>
            </div>
            </li>
            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="agriway" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src="" width="25"> Agriway
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="agriway">
                <a class="dropdown-item" href="#agriwayLogos">Logos</a>
                <a class="dropdown-item" href="#agriwayBranding">Branding</a>
                <a class="dropdown-item" href="#agriwayVideoInOut">Video Intro/Outro</a>
                <a class="dropdown-item" href="#agriwayLinks">Links</a>
            </div>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="languages" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    English
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="languages">
                    <a class="dropdown-item" href="#">Français</a>
                </div>
            </li>
            <li class="nav-item">
            &nbsp;
            </li>
        </ul>
        </div>
    </div>
    </nav>
</template>
    
<script>
    export default {
        name: 'HeaderVue',
        props: {
            msg: String
        }
    }
</script>