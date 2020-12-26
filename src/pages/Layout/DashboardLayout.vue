<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar}">
    <!-- <event-hub></event-hub> -->
    <side-bar
    :sidebarLinks="sidebarLinks"
    >
      <mobile-menu slot="content"></mobile-menu>
    </side-bar>
    <div class="main-panel">
        <top-navbar></top-navbar>
      <div class="content">
        <dashboard-content></dashboard-content>
        <content-footer v-if="!$route.meta.hideFooter"></content-footer>
      </div>
    </div>
  </div>
</template>
<script>
    import TopNavbar from "./TopNavbar.vue";
    import ContentFooter from "./ContentFooter.vue";
    import DashboardContent from "./Content.vue";
    import MobileMenu from "./MobileMenu"
export default {
  components: {
        TopNavbar,
        DashboardContent,
        ContentFooter,
        MobileMenu
  },
  data() {
    return {
      sidebarLinks: [
        {
          title: 'global.dashboard',
          icon: 'dashboard',
          path: { name: 'dashboard' }
        },
        {
      title: 'cruds.bikkhu.title',
      icon: 'table_view',
      path: { name: 'vinaya' },
      gate: 'vinaya_access',
      children: [
        {
          title: 'cruds.bikkhu.title',
              icon: 'table_view',
              path: { name: 'bikkhu' },
              gate: 'bikkhu_access',
          children: [
            {
                  title: 'cruds.bikkhuNidana.title',
                  icon: 'table_view',
                  path: { name: 'bikkhu_nidanas.index' },
                  gate: 'bikkhu_nidana_access'
              },
             {
                  title: 'cruds.bikkhuParajika.title',
                  icon: 'table_view',
                  path: { name: 'bikkhu_parajikas.index' },
                  gate: 'bikkhu_parajika_access'
              },
              {
                  title: 'cruds.bikkhuSamgadisesa.title',
                  icon: 'table_view',
                  path: { name: 'bikkhu_samgadisesas.index' },
                  gate: 'bikkhu_samgadisesa_access'
              },
              {
                  title: 'cruds.bikkhuAniyatum.title',
                  icon: 'table_view',
                  path: { name: 'bikkhu_aniyata.index' },
                  gate: 'bikkhu_aniyatum_access'
                },
                {
                  title: 'cruds.bikkhuNissaggiya.title',
                  icon: 'table_view',
                  path: { name: 'bikkhu_nissaggiyas.index' },
                  gate: 'bikkhu_nissaggiya_access'
                },
                {
                  title: 'cruds.bikkhuSuddhapacittiya.title',
                  icon: 'table_view',
                  path: { name: 'bikkhu_suddhapacittiyas.index' },
                  gate: 'bikkhu_suddhapacittiya_access'
                },
                {
                  title: 'cruds.bikkhuPatidesaniya.title',
                  icon: 'table_view',
                  path: { name: 'bikkhu_patidesaniyas.index' },
                  gate: 'bikkhu_patidesaniya_access'
                },
                {
                  title: 'cruds.bikkhuSekhiya.title',
                  icon: 'table_view',
                  path: { name: 'bikkhu_sekhiyas.index' },
                  gate: 'bikkhu_sekhiya_access'
                },
                {
                  title: 'cruds.bikkhuAdhikarana.title',
                  icon: 'table_view',
                  path: { name: 'bikkhu_adhikaranas.index' },
                  gate: 'bikkhu_adhikarana_access'
                }
          ]
        },
         {
              title: 'cruds.bikkhuni.title',
              icon: 'table_view',
              path: { name: 'bikkhuni' },
              gate: 'bikkhuni_access',
              children: [
                {
                  title: 'cruds.bikkhuniNidana.title',
                  icon: 'table_view',
                  path: { name: 'bikkhuni_nidanas.index' },
                  gate: 'bikkhuni_nidana_access'
                },
                {
                  title: 'cruds.bikkhuniParajika.title',
                  icon: 'table_view',
                  path: { name: 'bikkhuni_parajikas.index' },
                  gate: 'bikkhuni_parajika_access'
                },
                {
                  title: 'cruds.bikkhuniSamgadisesa.title',
                  icon: 'table_view',
                  path: { name: 'bikkhuni_samgadisesas.index' },
                  gate: 'bikkhuni_samgadisesa_access'
                },
                {
                  title: 'cruds.bikkhuniAniyatum.title',
                  icon: 'table_view',
                  path: { name: 'bikkhuni_aniyata.index' },
                  gate: 'bikkhuni_aniyatum_access'
                },
                {
                  title: 'cruds.bikkhuniNissaggiya.title',
                  icon: 'table_view',
                  path: { name: 'bikkhuni_nissaggiyas.index' },
                  gate: 'bikkhuni_nissaggiya_access'
                },
                {
                  title: 'cruds.bikkhuniSuddhapacittiya.title',
                  icon: 'table_view',
                  path: { name: 'bikkhuni_suddhapacittiyas.index' },
                  gate: 'bikkhuni_suddhapacittiya_access'
                },
                {
                  title: 'cruds.bikkhuniPatidesaniyaniya.title',
                  icon: 'table_view',
                  path: { name: 'bikkhuni_patidesaniyaniyas.index' },
                  gate: 'bikkhuni_patidesaniyaniya_access'
                },
                {
                  title: 'cruds.bikkhuniSekhiya.title',
                  icon: 'table_view',
                  path: { name: 'bikkhuni_sekhiyas.index' },
                  gate: 'bikkhuni_sekhiya_access'
                },
                {
                  title: 'cruds.bikkhuniAdhikarana.title',
                  icon: 'table_view',
                  path: { name: 'bikkhuni_adhikaranas.index' },
                  gate: 'bikkhuni_adhikarana_access'
                }
              ]
            },  
      ]
    },
    {
          title: 'cruds.dhammapada.title',
          icon: 'table_view',
          path: { name: 'dhammapada' },
          gate: 'dhammapada_access',
          children: [
            {
              title: 'cruds.yamakaVaggaVerse.title',
              icon: 'table_view',
              path: { name: 'yamaka_vagga_verses.index' },
              gate: 'yamaka_vagga_verse_access'
            },
            {
              title: 'cruds.appamadaVagga.title',
              icon: 'table_view',
              path: { name: 'appamada_vaggas.index' },
              gate: 'appamada_vagga_access'
            },
            {
              title: 'cruds.cittaVagga.title',
              icon: 'table_view',
              path: { name: 'citta_vaggas.index' },
              gate: 'citta_vagga_access'
            },
            {
              title: 'cruds.pupphaVagga.title',
              icon: 'table_view',
              path: { name: 'puppha_vaggas.index' },
              gate: 'puppha_vagga_access'
            },
            {
              title: 'cruds.balaVagga.title',
              icon: 'table_view',
              path: { name: 'bala_vaggas.index' },
              gate: 'bala_vagga_access'
            },
            {
              title: 'cruds.panditaVagga.title',
              icon: 'table_view',
              path: { name: 'pandita_vaggas.index' },
              gate: 'pandita_vagga_access'
            },
            {
              title: 'cruds.arahantaVagga.title',
              icon: 'table_view',
              path: { name: 'arahanta_vaggas.index' },
              gate: 'arahanta_vagga_access'
            },
            {
              title: 'cruds.sahassaVagga.title',
              icon: 'table_view',
              path: { name: 'sahassa_vaggas.index' },
              gate: 'sahassa_vagga_access'
            },
            {
              title: 'cruds.papaVagga.title',
              icon: 'table_view',
              path: { name: 'papa_vaggas.index' },
              gate: 'papa_vagga_access'
            },
            {
              title: 'cruds.dantaVagga.title',
              icon: 'table_view',
              path: { name: 'danta_vaggas.index' },
              gate: 'danta_vagga_access'
            },
            {
              title: 'cruds.jaraVagga.title',
              icon: 'table_view',
              path: { name: 'jara_vaggas.index' },
              gate: 'jara_vagga_access'
            },
            {
              title: 'cruds.attaVagga.title',
              icon: 'table_view',
              path: { name: 'atta_vaggas.index' },
              gate: 'atta_vagga_access'
            },
            {
              title: 'cruds.lawkaVagga.title',
              icon: 'table_view',
              path: { name: 'lawka_vaggas.index' },
              gate: 'lawka_vagga_access'
            },
            {
              title: 'cruds.buddhaVagga.title',
              icon: 'table_view',
              path: { name: 'buddha_vaggas.index' },
              gate: 'buddha_vagga_access'
            },
            {
              title: 'cruds.sukhaVaagga.title',
              icon: 'table_view',
              path: { name: 'sukha_vaaggas.index' },
              gate: 'sukha_vaagga_access'
            },
            {
              title: 'cruds.piyaVagga.title',
              icon: 'table_view',
              path: { name: 'piya_vaggas.index' },
              gate: 'piya_vagga_access'
            },
            {
              title: 'cruds.koddhaVagga.title',
              icon: 'table_view',
              path: { name: 'koddha_vaggas.index' },
              gate: 'koddha_vagga_access'
            },
            {
              title: 'cruds.malaVagga.title',
              icon: 'table_view',
              path: { name: 'mala_vaggas.index' },
              gate: 'mala_vagga_access'
            },
            {
              title: 'cruds.dhammatthaVagga.title',
              icon: 'table_view',
              path: { name: 'dhammattha_vaggas.index' },
              gate: 'dhammattha_vagga_access'
            },
            {
              title: 'cruds.maggaVagga.title',
              icon: 'table_view',
              path: { name: 'magga_vaggas.index' },
              gate: 'magga_vagga_access'
            },
            {
              title: 'cruds.pakinnakaVagga.title',
              icon: 'table_view',
              path: { name: 'pakinnaka_vaggas.index' },
              gate: 'pakinnaka_vagga_access'
            },
            {
              title: 'cruds.nirayaVagga.title',
              icon: 'table_view',
              path: { name: 'niraya_vaggas.index' },
              gate: 'niraya_vagga_access'
            },
            {
              title: 'cruds.nagaVagga.title',
              icon: 'table_view',
              path: { name: 'naga_vaggas.index' },
              gate: 'naga_vagga_access'
            },
            {
              title: 'cruds.tahnaVagga.title',
              icon: 'table_view',
              path: { name: 'tahna_vaggas.index' },
              gate: 'tahna_vagga_access'
            },
            {
              title: 'cruds.bhikkhuVagga.title',
              icon: 'table_view',
              path: { name: 'bhikkhu_vaggas.index' },
              gate: 'bhikkhu_vagga_access'
            },
            {
              title: 'cruds.braminVagga.title',
              icon: 'table_view',
              path: { name: 'bramin_vaggas.index' },
              gate: 'bramin_vagga_access'
            }
          ]
        },
        {
          title: 'cruds.jatakaPali.title',
          icon: 'table_view',
          path: { name: 'jataka_pali' },
          gate: 'jataka_pali_access',
          children: [
            {
              title: 'cruds.ekakaNipataJataka.title',
              icon: 'table_view',
              path: { name: 'ekaka_nipata_jataka' },
              gate: 'ekaka_nipata_jataka_access',
              children: [
                {
                  title: 'cruds.apandakaVagga.title',
                  icon: 'table_view',
                  path: { name: 'apandaka_vaggas.index' },
                  gate: 'apandaka_vagga_access'
                },
                {
                  title: 'cruds.silaVagga.title',
                  icon: 'table_view',
                  path: { name: 'sila_vaggas.index' },
                  gate: 'sila_vagga_access'
                },
                {
                  title: 'cruds.kuringaVagga.title',
                  icon: 'table_view',
                  path: { name: 'kuringa_vaggas.index' },
                  gate: 'kuringa_vagga_access'
                },
                {
                  title: 'cruds.kulavakaVagga.title',
                  icon: 'table_view',
                  path: { name: 'kulavaka_vaggas.index' },
                  gate: 'kulavaka_vagga_access'
                },
                {
                  title: 'cruds.atthakamaVagga.title',
                  icon: 'table_view',
                  path: { name: 'atthakama_vaggas.index' },
                  gate: 'atthakama_vagga_access'
                },
                {
                  title: 'cruds.asisaVagga.title',
                  icon: 'table_view',
                  path: { name: 'asisa_vaggas.index' },
                  gate: 'asisa_vagga_access'
                },
                {
                  title: 'cruds.itthiVagga.title',
                  icon: 'table_view',
                  path: { name: 'itthi_vaggas.index' },
                  gate: 'itthi_vagga_access'
                },
                {
                  title: 'cruds.varunaVagga.title',
                  icon: 'table_view',
                  path: { name: 'varuna_vaggas.index' },
                  gate: 'varuna_vagga_access'
                },
                {
                  title: 'cruds.apayimaVagga.title',
                  icon: 'table_view',
                  path: { name: 'apayima_vaggas.index' },
                  gate: 'apayima_vagga_access'
                },
                {
                  title: 'cruds.littaVagga.title',
                  icon: 'table_view',
                  path: { name: 'litta_vaggas.index' },
                  gate: 'litta_vagga_access'
                },
                {
                  title: 'cruds.parosataVagga.title',
                  icon: 'table_view',
                  path: { name: 'parosata_vaggas.index' },
                  gate: 'parosata_vagga_access'
                },
                {
                  title: 'cruds.hanciVagga.title',
                  icon: 'table_view',
                  path: { name: 'hanci_vaggas.index' },
                  gate: 'hanci_vagga_access'
                },
                {
                  title: 'cruds.kusanaliVagga.title',
                  icon: 'table_view',
                  path: { name: 'kusanali_vaggas.index' },
                  gate: 'kusanali_vagga_access'
                },
                {
                  title: 'cruds.asampadanaVagga.title',
                  icon: 'table_view',
                  path: { name: 'asampadana_vaggas.index' },
                  gate: 'asampadana_vagga_access'
                },
                {
                  title: 'cruds.kakamntakaVagga.title',
                  icon: 'table_view',
                  path: { name: 'kakamntaka_vaggas.index' },
                  gate: 'kakamntaka_vagga_access'
                }
              ]
            },
            {
              title: 'cruds.jatakaDukanipatum.title',
              icon: 'table_view',
              path: { name: 'jataka_dukanipatum' },
              gate: 'jataka_dukanipatum_access',
              children: [
                {
                  title: 'cruds.danlaVagga.title',
                  icon: 'table_view',
                  path: { name: 'danla_vaggas.index' },
                  gate: 'danla_vagga_access'
                },
                {
                  title: 'cruds.santhavaVagga.title',
                  icon: 'table_view',
                  path: { name: 'santhava_vaggas.index' },
                  gate: 'santhava_vagga_access'
                },
                {
                  title: 'cruds.kalayarnaVagga.title',
                  icon: 'table_view',
                  path: { name: 'kalayarna_vaggas.index' },
                  gate: 'kalayarna_vagga_access'
                },
                {
                  title: 'cruds.asadisaVagga.title',
                  icon: 'table_view',
                  path: { name: 'asadisa_vaggas.index' },
                  gate: 'asadisa_vagga_access'
                },
                {
                  title: 'cruds.ruhakaVagga.title',
                  icon: 'table_view',
                  path: { name: 'ruhaka_vaggas.index' },
                  gate: 'ruhaka_vagga_access'
                },
                {
                  title: 'cruds.natamdanlaVagga.title',
                  icon: 'table_view',
                  path: { name: 'natamdanla_vaggas.index' },
                  gate: 'natamdanla_vagga_access'
                },
                {
                  title: 'cruds.biranathambhaVagga.title',
                  icon: 'table_view',
                  path: { name: 'biranathambha_vaggas.index' },
                  gate: 'biranathambha_vagga_access'
                },
                {
                  title: 'cruds.kasavaVagga.title',
                  icon: 'table_view',
                  path: { name: 'kasava_vaggas.index' },
                  gate: 'kasava_vagga_access'
                },
                {
                  title: 'cruds.upahanaVagga.title',
                  icon: 'table_view',
                  path: { name: 'upahana_vaggas.index' },
                  gate: 'upahana_vagga_access'
                },
                {
                  title: 'cruds.singalaVagga.title',
                  icon: 'table_view',
                  path: { name: 'singala_vaggas.index' },
                  gate: 'singala_vagga_access'
                }
              ]
            },
            {
              title: 'cruds.jatakaTikaNipatum.title',
              icon: 'table_view',
              path: { name: 'jataka_tika_nipatum' },
              gate: 'jataka_tika_nipatum_access',
              children: [
                {
                  title: 'cruds.sinkappaVagga.title',
                  icon: 'table_view',
                  path: { name: 'sinkappa_vaggas.index' },
                  gate: 'sinkappa_vagga_access'
                },
                {
                  title: 'cruds.padumaVagga.title',
                  icon: 'table_view',
                  path: { name: 'paduma_vaggas.index' },
                  gate: 'paduma_vagga_access'
                },
                {
                  title: 'cruds.udapanaVagga.title',
                  icon: 'table_view',
                  path: { name: 'udapana_vaggas.index' },
                  gate: 'udapana_vagga_access'
                },
                {
                  title: 'cruds.abbhantaraVagga.title',
                  icon: 'table_view',
                  path: { name: 'abbhantara_vaggas.index' },
                  gate: 'abbhantara_vagga_access'
                },
                {
                  title: 'cruds.kumbhaVagga.title',
                  icon: 'table_view',
                  path: { name: 'kumbha_vaggas.index' },
                  gate: 'kumbha_vagga_access'
                }
              ]
            },
            {
              title: 'cruds.jatakaCatukkaNipatum.title',
              icon: 'table_view',
              path: { name: 'jataka_catukka_nipatum' },
              gate: 'jataka_catukka_nipatum_access',
              children: [
                {
                  title: 'cruds.kalingaVagga.title',
                  icon: 'table_view',
                  path: { name: 'kalinga_vaggas.index' },
                  gate: 'kalinga_vagga_access'
                },
                {
                  title: 'cruds.pucimandaVagga.title',
                  icon: 'table_view',
                  path: { name: 'pucimanda_vaggas.index' },
                  gate: 'pucimanda_vagga_access'
                },
                {
                  title: 'cruds.kutidusakaVagga.title',
                  icon: 'table_view',
                  path: { name: 'kutidusaka_vaggas.index' },
                  gate: 'kutidusaka_vagga_access'
                },
                {
                  title: 'cruds.kokilaVagga.title',
                  icon: 'table_view',
                  path: { name: 'kokila_vaggas.index' },
                  gate: 'kokila_vagga_access'
                },
                {
                  title: 'cruds.cunakunalaVagga.title',
                  icon: 'table_view',
                  path: { name: 'cunakunala_vaggas.index' },
                  gate: 'cunakunala_vagga_access'
                }
              ]
            },
            {
              title: 'cruds.jatakaPaccauNipatum.title',
              icon: 'table_view',
              path: { name: 'jataka_paccau_nipatum' },
              gate: 'jataka_paccau_nipatum_access',
              children: [
                {
                  title: 'cruds.manikunthalaVagga.title',
                  icon: 'table_view',
                  path: { name: 'manikunthala_vaggas.index' },
                  gate: 'manikunthala_vagga_access'
                },
                {
                  title: 'cruds.vannarohaVagga.title',
                  icon: 'table_view',
                  path: { name: 'vannaroha_vaggas.index' },
                  gate: 'vannaroha_vagga_access'
                },
                {
                  title: 'cruds.addhaVagga.title',
                  icon: 'table_view',
                  path: { name: 'addha_vaggas.index' },
                  gate: 'addha_vagga_access'
                }
              ]
            },
            {
              title: 'cruds.jatakaSakkaNipatum.title',
              icon: 'table_view',
              path: { name: 'jataka_sakka_nipatum' },
              gate: 'jataka_sakka_nipatum_access',
              children: [
                {
                  title: 'cruds.avariyaVagga.title',
                  icon: 'table_view',
                  path: { name: 'avariya_vaggas.index' },
                  gate: 'avariya_vagga_access'
                },
                {
                  title: 'cruds.karaputtaVagga.title',
                  icon: 'table_view',
                  path: { name: 'karaputta_vaggas.index' },
                  gate: 'karaputta_vagga_access'
                }
              ]
            },
            {
              title: 'cruds.jatakaSattaNipatum.title',
              icon: 'table_view',
              path: { name: 'jataka_satta_nipatum' },
              gate: 'jataka_satta_nipatum_access',
              children: [
                {
                  title: 'cruds.kukkuVagga.title',
                  icon: 'table_view',
                  path: { name: 'kukku_vaggas.index' },
                  gate: 'kukku_vagga_access'
                },
                {
                  title: 'cruds.gandaraVagga.title',
                  icon: 'table_view',
                  path: { name: 'gandara_vaggas.index' },
                  gate: 'gandara_vagga_access'
                }
              ]
            },
            {
              title: 'cruds.jatakaAtthakaNipatum.title',
              icon: 'table_view',
              path: { name: 'jataka_atthaka_nipata.index' },
              gate: 'jataka_atthaka_nipatum_access'
            },
            {
              title: 'cruds.jatakaNavakaNipatum.title',
              icon: 'table_view',
              path: { name: 'jataka_navaka_nipata.index' },
              gate: 'jataka_navaka_nipatum_access'
            },
            {
              title: 'cruds.jatakaDasakaNipatum.title',
              icon: 'table_view',
              path: { name: 'jataka_dasaka_nipata.index' },
              gate: 'jataka_dasaka_nipatum_access'
            },
            {
              title: 'cruds.jatakaEkadasakaNipatum.title',
              icon: 'table_view',
              path: { name: 'jataka_ekadasaka_nipata.index' },
              gate: 'jataka_ekadasaka_nipatum_access'
            },
            {
              title: 'cruds.jatakaDvadasaNipatum.title',
              icon: 'table_view',
              path: { name: 'jataka_dvadasa_nipata.index' },
              gate: 'jataka_dvadasa_nipatum_access'
            },
            {
              title: 'cruds.jatakaTedasakaNipatum.title',
              icon: 'table_view',
              path: { name: 'jataka_tedasaka_nipata.index' },
              gate: 'jataka_tedasaka_nipatum_access'
            },
            {
              title: 'cruds.jatakaPakinnakaNipatum.title',
              icon: 'table_view',
              path: { name: 'jataka_pakinnaka_nipata.index' },
              gate: 'jataka_pakinnaka_nipatum_access'
            },
            {
              title: 'cruds.jatakaVisatiNipatum.title',
              icon: 'table_view',
              path: { name: 'jataka_visati_nipata.index' },
              gate: 'jataka_visati_nipatum_access'
            },
            {
              title: 'cruds.jatakaTamsaNipatum.title',
              icon: 'table_view',
              path: { name: 'jataka_tamsa_nipata.index' },
              gate: 'jataka_tamsa_nipatum_access'
            }
          ]
        },
        {
          title: 'cruds.jatakaPaliDutiyabhaga.title',
          icon: 'table_view',
          path: { name: 'jataka_pali_dutiyabhaga' },
          gate: 'jataka_pali_dutiyabhaga_access',
          children: [
            {
              title: 'cruds.jatakaCattalisaNipatum.title',
              icon: 'table_view',
              path: { name: 'jataka_cattalisa_nipata.index' },
              gate: 'jataka_cattalisa_nipatum_access'
            },
            {
              title: 'cruds.jatakaPannasaNipatum.title',
              icon: 'table_view',
              path: { name: 'jataka_pannasa_nipata.index' },
              gate: 'jataka_pannasa_nipatum_access'
            },
            {
              title: 'cruds.jatakaSatthiNipatum.title',
              icon: 'table_view',
              path: { name: 'jataka_satthi_nipata.index' },
              gate: 'jataka_satthi_nipatum_access'
            },
            {
              title: 'cruds.jatakaSattatiNipatum.title',
              icon: 'table_view',
              path: { name: 'jataka_sattati_nipata.index' },
              gate: 'jataka_sattati_nipatum_access'
            },
            {
              title: 'cruds.jatakaAsitiNipatum.title',
              icon: 'table_view',
              path: { name: 'jataka_asiti_nipata.index' },
              gate: 'jataka_asiti_nipatum_access'
            },
            {
              title: 'cruds.jatakaMahaNipatum.title',
              icon: 'table_view',
              path: { name: 'jataka_maha_nipata.index' },
              gate: 'jataka_maha_nipatum_access'
            }
          ]
        },
        {
          title: 'cruds.abhidhammatthaSangaha.title',
          icon: 'table_view',
          path: { name: 'abhidhammattha_sangaha' },
          gate: 'abhidhammattha_sangaha_access',
          children: [
            {
              title: 'cruds.abhidhammaCittaLesson.title',
              icon: 'table_view',
              path: { name: 'abhidhamma_citta_lessons.index' },
              gate: 'abhidhamma_citta_lesson_access'
            },
            {
              title: 'cruds.abhidhammaCetasikaLesson.title',
              icon: 'table_view',
              path: { name: 'abhidhamma_cetasika_lessons.index' },
              gate: 'abhidhamma_cetasika_lesson_access'
            },
            {
              title: 'cruds.abhiddhammaPakimLesson.title',
              icon: 'table_view',
              path: { name: 'abhiddhamma_pakim_lessons.index' },
              gate: 'abhiddhamma_pakim_lesson_access'
            },
            {
              title: 'cruds.abhiddhammaVithiLesson.title',
              icon: 'table_view',
              path: { name: 'abhiddhamma_vithi_lessons.index' },
              gate: 'abhiddhamma_vithi_lesson_access'
            },
            {
              title: 'cruds.abhidhammaVithimoteLesson.title',
              icon: 'table_view',
              path: { name: 'abhidhamma_vithimote_lessons.index' },
              gate: 'abhidhamma_vithimote_lesson_access'
            },
            {
              title: 'cruds.abhidhammaRupaLesson.title',
              icon: 'table_view',
              path: { name: 'abhidhamma_rupa_lessons.index' },
              gate: 'abhidhamma_rupa_lesson_access'
            },
            {
              title: 'cruds.abhidhammaSamuciLesson.title',
              icon: 'table_view',
              path: { name: 'abhidhamma_samuci_lessons.index' },
              gate: 'abhidhamma_samuci_lesson_access'
            },
            {
              title: 'cruds.abhidhammaPassiLesson.title',
              icon: 'table_view',
              path: { name: 'abhidhamma_passi_lessons.index' },
              gate: 'abhidhamma_passi_lesson_access'
            },
            {
              title: 'cruds.abhidhammaKamathanLesson.title',
              icon: 'table_view',
              path: { name: 'abhidhamma_kamathan_lessons.index' },
              gate: 'abhidhamma_kamathan_lesson_access'
            }
          ]
        },
        {
          title: 'cruds.paligrammar.title',
          icon: 'table_view',
          path: { name: 'paligrammar' },
          gate: 'paligrammar_access',
          children: [
            {
              title: 'cruds.grammarChapter.title',
              icon: 'table_view',
              path: { name: 'grammar_chapters.index' },
              gate: 'grammar_chapter_access'
            },
            {
              title: 'cruds.grammarSandi.title',
              icon: 'table_view',
              path: { name: 'grammar_sandis.index' },
              gate: 'grammar_sandi_access'
            },
            {
              title: 'cruds.grammarNama.title',
              icon: 'table_view',
              path: { name: 'grammar_namas.index' },
              gate: 'grammar_nama_access'
            },
            {
              title: 'cruds.grammarKaraka.title',
              icon: 'table_view',
              path: { name: 'grammar_karakas.index' },
              gate: 'grammar_karaka_access'
            },
            {
              title: 'cruds.grammarSamasa.title',
              icon: 'table_view',
              path: { name: 'grammar_samasas.index' },
              gate: 'grammar_samasa_access'
            },
            {
              title: 'cruds.grammarTadisa.title',
              icon: 'table_view',
              path: { name: 'grammar_tadisas.index' },
              gate: 'grammar_tadisa_access'
            },
            {
              title: 'cruds.grammarArachatum.title',
              icon: 'table_view',
              path: { name: 'grammar_arachata.index' },
              gate: 'grammar_arachatum_access'
            },
            {
              title: 'cruds.grammarKibhidhana.title',
              icon: 'table_view',
              path: { name: 'grammar_kibhidhanas.index' },
              gate: 'grammar_kibhidhana_access'
            },
            {
              title: 'cruds.grammarUnadikappa.title',
              icon: 'table_view',
              path: { name: 'grammar_unadikappas.index' },
              gate: 'grammar_unadikappa_access'
            }
          ]
        }
      ]
    }
  }
}
</script>