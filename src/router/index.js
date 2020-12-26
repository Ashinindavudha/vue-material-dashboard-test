import Vue from 'vue'
import VueRouter from 'vue-router'
const View = { template: '<router-view></router-view>' }
//import Home from '../views/Home.vue'
//import DashboardLayout from "../pages/Layout/DashboardLayout.vue";
//import Dashboard from '../pages/Dashboard.vue'
//import BikkhuNidanaShow from '../cruds/BikkhuNidanas/Show.vue';
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: () => import('../pages/Layout/DashboardLayout.vue'),
        redirect: 'dashboard',
        children: [
            {
                path: '/dashboard',
                name: 'dashboard',
                component: () => import('../pages/Dashboard.vue'),
                meta: { title: 'dashboard' }
            },
            {
                path: 'vinaya',
                name: 'vinaya',
                component: View,
                children: [
                    {
                        path: 'bikkhu',
                        name: 'bikkhu',
                        component: View,
                        redirect: { name: 'bikkhu_nidanas.index' },
                        children: [
                            {
                                path: 'bikkhu-nidanas',
                                name: 'bikkhu_nidanas.index',
                                component: () => import('../cruds/BikkhuNidanas/Index.vue'),
                                meta: { title: 'BikkhuNidanas' }
                            },
                            {
                                path: 'bikkhu-nidanas/:id',
                                name: 'bikkhu-nidanas.show',
                                component: () => import('../cruds/BikkhuNidanas/Show.vue'),
                                //component: BikkhuNidanaShow,
                                meta: { title: 'bikkhuNidana' },
                                props: true
                              },
                              {
                                path: 'bikkhu-parajikas',
                                name: 'bikkhu_parajikas.index',
                                component: () => import('../cruds/BikkhuParajikas/Index.vue'),
                                meta: { title: 'bikkhuParajika' }
                              },
                              {
                                path: 'bikkhu-parajikas/:id',
                                name: 'bikkhu_parajikas.show',
                                component: () => import('../cruds/BikkhuParajikas/Show.vue'),
                                meta: { title: 'bikkhuParajika' }
                              },
                              {
                                path: 'bikkhu-samgadisesas',
                                name: 'bikkhu_samgadisesas.index',
                                component: () => import('../cruds/BikkhuSamgadisesas/Index.vue'),
                                meta: { title: 'cruds.bikkhuSamgadisesa.title' }
                              },
                              {
                                path: 'bikkhu-samgadisesas/:id',
                                name: 'bikkhu_samgadisesas.show',
                                component: () => import('../cruds/BikkhuSamgadisesas/Show.vue'),
                                meta: { title: 'cruds.bikkhuSamgadisesa.title' }
                              },
                              {
                                path: 'bikkhu-aniyata',
                                name: 'bikkhu_aniyata.index',
                                component: () => import('../cruds/BikkhuAniyata/Index.vue'),
                                meta: { title: 'cruds.bikkhuAniyatum.title' }
                              },
                              {
                                path: 'bikkhu-aniyata/:id',
                                name: 'bikkhu_aniyata.show',
                                component: () => import('../cruds/BikkhuAniyata/Show.vue'),
                                meta: { title: 'cruds.bikkhuAniyatum.title' }
                              },
                              {
                                path: 'bikkhu-nissaggiyas',
                                name: 'bikkhu_nissaggiyas.index',
                                component: () => import('../cruds/BikkhuNissaggiyas/Index.vue'),
                                meta: { title: 'cruds.bikkhuNissaggiya.title' }
                              },
                              {
                                path: 'bikkhu-nissaggiyas/:id',
                                name: 'bikkhu_nissaggiyas.show',
                                component: () => import('../cruds/BikkhuNissaggiyas/Show.vue'),
                                meta: { title: 'cruds.bikkhuNissaggiya.title' }
                              },
                              {
                                path: 'bikkhu-suddhapacittiyas',
                                name: 'bikkhu_suddhapacittiyas.index',
                                component: () =>
                                  import('../cruds/BikkhuSuddhapacittiyas/Index.vue'),
                                meta: { title: 'cruds.bikkhuSuddhapacittiya.title' }
                              },
                              {
                                path: 'bikkhu-suddhapacittiyas/:id',
                                name: 'bikkhu_suddhapacittiyas.show',
                                component: () =>
                                  import('../cruds/BikkhuSuddhapacittiyas/Show.vue'),
                                meta: { title: 'cruds.bikkhuSuddhapacittiya.title' }
                              },
                              {
                                path: 'bikkhu-patidesaniyas',
                                name: 'bikkhu_patidesaniyas.index',
                                component: () => import('../cruds/BikkhuPatidesaniyas/Index.vue'),
                                meta: { title: 'cruds.bikkhuPatidesaniya.title' }
                              },
                              {
                                path: 'bikkhu-patidesaniyas/:id',
                                name: 'bikkhu_patidesaniyas.show',
                                component: () => import('../cruds/BikkhuPatidesaniyas/Show.vue'),
                                meta: { title: 'cruds.bikkhuPatidesaniya.title' }
                              },
                              {
                                path: 'bikkhu-sekhiyas',
                                name: 'bikkhu_sekhiyas.index',
                                component: () => import('../cruds/BikkhuSekhiyas/Index.vue'),
                                meta: { title: 'cruds.bikkhuSekhiya.title' }
                              },
                              {
                                path: 'bikkhu-sekhiyas/:id',
                                name: 'bikkhu_sekhiyas.show',
                                component: () => import('../cruds/BikkhuSekhiyas/Show.vue'),
                                meta: { title: 'cruds.bikkhuSekhiya.title' }
                              },
                              {
                                path: 'bikkhu-adhikaranas',
                                name: 'bikkhu_adhikaranas.index',
                                component: () => import('../cruds/BikkhuAdhikaranas/Index.vue'),
                                meta: { title: 'cruds.bikkhuAdhikarana.title' }
                              },
                              {
                                path: 'bikkhu-adhikaranas/:id',
                                name: 'bikkhu_adhikaranas.show',
                                component: () => import('../cruds/BikkhuAdhikaranas/Show.vue'),
                                meta: { title: 'cruds.bikkhuAdhikarana.title' }
                              },
                        ]
                    },
                    {
                      path: 'bikkhuni',
                      name: 'bikkhuni',
                      component: View,
                      redirect: {name: 'bikkhuni_nidanas.index' },
                      children: [
                        {
                          path: 'bikkhuni-nidanas',
                          name: 'bikkhuni_nidanas.index',
                          component: () => import('../cruds/BikkhuniNidanas/Index.vue'),
                          meta: { title: 'cruds.bikkhuniNidana.title' }
                        },
                        {
                          path: 'bikkhuni-nidanas/:id',
                          name: 'bikkhuni_nidanas.show',
                          component: () => import('../cruds/BikkhuniNidanas/Show.vue'),
                          meta: { title: 'cruds.bikkhuniNidana.title' }
                        },
                        {
                          path: 'bikkhuni-parajikas',
                          name: 'bikkhuni_parajikas.index',
                          component: () => import('../cruds/BikkhuniParajikas/Index.vue'),
                          meta: { title: 'cruds.bikkhuniParajika.title' }
                        },
                        {
                          path: 'bikkhuni-parajikas/:id',
                          name: 'bikkhuni_parajikas.show',
                          component: () => import('../cruds/BikkhuniParajikas/Show.vue'),
                          meta: { title: 'cruds.bikkhuniParajika.title' }
                        },
                        {
                          path: 'bikkhuni-samgadisesas',
                          name: 'bikkhuni_samgadisesas.index',
                          component: () =>
                            import('../cruds/BikkhuniSamgadisesas/Index.vue'),
                          meta: { title: 'cruds.bikkhuniSamgadisesa.title' }
                        },
                        {
                          path: 'bikkhuni-samgadisesas/:id',
                          name: 'bikkhuni_samgadisesas.show',
                          component: () => import('../cruds/BikkhuniSamgadisesas/Show.vue'),
                          meta: { title: 'cruds.bikkhuniSamgadisesa.title' }
                        },
                        {
                          path: 'bikkhuni-aniyata',
                          name: 'bikkhuni_aniyata.index',
                          component: () => import('../cruds/BikkhuniAniyata/Index.vue'),
                          meta: { title: 'cruds.bikkhuniAniyatum.title' }
                        },
                        {
                          path: 'bikkhuni-aniyata/:id',
                          name: 'bikkhuni_aniyata.show',
                          component: () => import('../cruds/BikkhuniAniyata/Show.vue'),
                          meta: { title: 'cruds.bikkhuniAniyatum.title' }
                        },
                        {
                          path: 'bikkhuni-nissaggiyas',
                          name: 'bikkhuni_nissaggiyas.index',
                          component: () => import('../cruds/BikkhuniNissaggiyas/Index.vue'),
                          meta: { title: 'cruds.bikkhuniNissaggiya.title' }
                        },
                        {
                          path: 'bikkhuni-nissaggiyas/:id',
                          name: 'bikkhuni_nissaggiyas.show',
                          component: () => import('../cruds/BikkhuniNissaggiyas/Show.vue'),
                          meta: { title: 'cruds.bikkhuniNissaggiya.title' }
                        },
                        {
                          path: 'bikkhuni-suddhapacittiyas',
                          name: 'bikkhuni_suddhapacittiyas.index',
                          component: () =>
                            import('../cruds/BikkhuniSuddhapacittiyas/Index.vue'),
                          meta: { title: 'cruds.bikkhuniSuddhapacittiya.title' }
                        },
                        {
                          path: 'bikkhuni-suddhapacittiyas/:id',
                          name: 'bikkhuni_suddhapacittiyas.show',
                          component: () =>
                            import('../cruds/BikkhuniSuddhapacittiyas/Show.vue'),
                          meta: { title: 'cruds.bikkhuniSuddhapacittiya.title' }
                        },
                        {
                          path: 'bikkhuni-patidesaniyaniyas',
                          name: 'bikkhuni_patidesaniyaniyas.index',
                          component: () =>
                            import('../cruds/BikkhuniPatidesaniyaniyas/Index.vue'),
                          meta: { title: 'cruds.bikkhuniPatidesaniyaniya.title' }
                        },
                        {
                          path: 'bikkhuni-patidesaniyaniyas/:id',
                          name: 'bikkhuni_patidesaniyaniyas.show',
                          component: () =>
                            import('../cruds/BikkhuniPatidesaniyaniyas/Show.vue'),
                          meta: { title: 'cruds.bikkhuniPatidesaniyaniya.title' }
                        },
                        {
                          path: 'bikkhuni-sekhiyas',
                          name: 'bikkhuni_sekhiyas.index',
                          component: () => import('../cruds/BikkhuniSekhiyas/Index.vue'),
                          meta: { title: 'cruds.bikkhuniSekhiya.title' }
                        },
                        {
                          path: 'bikkhuni-sekhiyas/:id',
                          name: 'bikkhuni_sekhiyas.show',
                          component: () => import('../cruds/BikkhuniSekhiyas/Show.vue'),
                          meta: { title: 'cruds.bikkhuniSekhiya.title' }
                        },
                        {
                          path: 'bikkhuni-adhikaranas',
                          name: 'bikkhuni_adhikaranas.index',
                          component: () => import('../cruds/BikkhuniAdhikaranas/Index.vue'),
                          meta: { title: 'cruds.bikkhuniAdhikarana.title' }
                        },
                        {
                          path: 'bikkhuni-adhikaranas/:id',
                          name: 'bikkhuni_adhikaranas.show',
                          component: () => import('../cruds/BikkhuniAdhikaranas/Show.vue'),
                          meta: { title: 'cruds.bikkhuniAdhikarana.title' }
                        },
                      ]
                    }
                ]
            },
            //dhammapada & jataka 
            {
              path: 'dhammapada',
              name: 'dhammapada',
              component: View,
              redirect: { name: 'yamaka_vagga_verses.index' },
              children: [
                {
                  path: 'yamaka-vagga-verses',
                  name: 'yamaka_vagga_verses.index',
                  component: () => import('../cruds/YamakaVaggaVerses/Index.vue'),
                  meta: { title: 'cruds.yamakaVaggaVerse.title' }
                },
                {
                  path: 'yamaka-vagga-verses/:id',
                  name: 'yamaka_vagga_verses.show',
                  component: () => import('../cruds/YamakaVaggaVerses/Show.vue'),
                  meta: { title: 'cruds.yamakaVaggaVerse.title' }
                },
                {
                  path: 'appamada-vaggas',
                  name: 'appamada_vaggas.index',
                  component: () => import('../cruds/AppamadaVaggas/Index.vue'),
                  meta: { title: 'cruds.appamadaVagga.title' }
                },
                
                {
                  path: 'appamada-vaggas/:id',
                  name: 'appamada_vaggas.show',
                  component: () => import('../cruds/AppamadaVaggas/Show.vue'),
                  meta: { title: 'cruds.appamadaVagga.title' }
                },
                
                {
                  path: 'citta-vaggas',
                  name: 'citta_vaggas.index',
                  component: () => import('../cruds/CittaVaggas/Index.vue'),
                  meta: { title: 'cruds.cittaVagga.title' }
                },
                
                {
                  path: 'citta-vaggas/:id',
                  name: 'citta_vaggas.show',
                  component: () => import('../cruds/CittaVaggas/Show.vue'),
                  meta: { title: 'cruds.cittaVagga.title' }
                },
                
                {
                  path: 'puppha-vaggas',
                  name: 'puppha_vaggas.index',
                  component: () => import('../cruds/PupphaVaggas/Index.vue'),
                  meta: { title: 'cruds.pupphaVagga.title' }
                },
                
                {
                  path: 'puppha-vaggas/:id',
                  name: 'puppha_vaggas.show',
                  component: () => import('../cruds/PupphaVaggas/Show.vue'),
                  meta: { title: 'cruds.pupphaVagga.title' }
                },
                
                {
                  path: 'bala-vaggas',
                  name: 'bala_vaggas.index',
                  component: () => import('../cruds/BalaVaggas/Index.vue'),
                  meta: { title: 'cruds.balaVagga.title' }
                },
                
                {
                  path: 'bala-vaggas/:id',
                  name: 'bala_vaggas.show',
                  component: () => import('../cruds/BalaVaggas/Show.vue'),
                  meta: { title: 'cruds.balaVagga.title' }
                },
                
                {
                  path: 'pandita-vaggas',
                  name: 'pandita_vaggas.index',
                  component: () => import('../cruds/PanditaVaggas/Index.vue'),
                  meta: { title: 'cruds.panditaVagga.title' }
                },
                
                {
                  path: 'pandita-vaggas/:id',
                  name: 'pandita_vaggas.show',
                  component: () => import('../cruds/PanditaVaggas/Show.vue'),
                  meta: { title: 'cruds.panditaVagga.title' }
                },
                
                {
                  path: 'arahanta-vaggas',
                  name: 'arahanta_vaggas.index',
                  component: () => import('../cruds/ArahantaVaggas/Index.vue'),
                  meta: { title: 'cruds.arahantaVagga.title' }
                },
               
                {
                  path: 'arahanta-vaggas/:id',
                  name: 'arahanta_vaggas.show',
                  component: () => import('../cruds/ArahantaVaggas/Show.vue'),
                  meta: { title: 'cruds.arahantaVagga.title' }
                },
                
                {
                  path: 'sahassa-vaggas',
                  name: 'sahassa_vaggas.index',
                  component: () => import('../cruds/SahassaVaggas/Index.vue'),
                  meta: { title: 'cruds.sahassaVagga.title' }
                },
               
                {
                  path: 'sahassa-vaggas/:id',
                  name: 'sahassa_vaggas.show',
                  component: () => import('../cruds/SahassaVaggas/Show.vue'),
                  meta: { title: 'cruds.sahassaVagga.title' }
                },
               
                {
                  path: 'papa-vaggas',
                  name: 'papa_vaggas.index',
                  component: () => import('../cruds/PapaVaggas/Index.vue'),
                  meta: { title: 'cruds.papaVagga.title' }
                },
                
                {
                  path: 'papa-vaggas/:id',
                  name: 'papa_vaggas.show',
                  component: () => import('../cruds/PapaVaggas/Show.vue'),
                  meta: { title: 'cruds.papaVagga.title' }
                },
                
                {
                  path: 'danta-vaggas',
                  name: 'danta_vaggas.index',
                  component: () => import('../cruds/DantaVaggas/Index.vue'),
                  meta: { title: 'cruds.dantaVagga.title' }
                },
               
                {
                  path: 'danta-vaggas/:id',
                  name: 'danta_vaggas.show',
                  component: () => import('../cruds/DantaVaggas/Show.vue'),
                  meta: { title: 'cruds.dantaVagga.title' }
                },
                
                {
                  path: 'jara-vaggas',
                  name: 'jara_vaggas.index',
                  component: () => import('../cruds/JaraVaggas/Index.vue'),
                  meta: { title: 'cruds.jaraVagga.title' }
                },
                
                {
                  path: 'jara-vaggas/:id',
                  name: 'jara_vaggas.show',
                  component: () => import('../cruds/JaraVaggas/Show.vue'),
                  meta: { title: 'cruds.jaraVagga.title' }
                },
                
                {
                  path: 'atta-vaggas',
                  name: 'atta_vaggas.index',
                  component: () => import('../cruds/AttaVaggas/Index.vue'),
                  meta: { title: 'cruds.attaVagga.title' }
                },
               
                {
                  path: 'atta-vaggas/:id',
                  name: 'atta_vaggas.show',
                  component: () => import('../cruds/AttaVaggas/Show.vue'),
                  meta: { title: 'cruds.attaVagga.title' }
                },
               
                {
                  path: 'lawka-vaggas',
                  name: 'lawka_vaggas.index',
                  component: () => import('../cruds/LawkaVaggas/Index.vue'),
                  meta: { title: 'cruds.lawkaVagga.title' }
                },
               
                {
                  path: 'lawka-vaggas/:id',
                  name: 'lawka_vaggas.show',
                  component: () => import('../cruds/LawkaVaggas/Show.vue'),
                  meta: { title: 'cruds.lawkaVagga.title' }
                },
               
                {
                  path: 'buddha-vaggas',
                  name: 'buddha_vaggas.index',
                  component: () => import('../cruds/BuddhaVaggas/Index.vue'),
                  meta: { title: 'cruds.buddhaVagga.title' }
                },
               
                {
                  path: 'buddha-vaggas/:id',
                  name: 'buddha_vaggas.show',
                  component: () => import('../cruds/BuddhaVaggas/Show.vue'),
                  meta: { title: 'cruds.buddhaVagga.title' }
                },
               
                {
                  path: 'sukha-vaaggas',
                  name: 'sukha_vaaggas.index',
                  component: () => import('../cruds/SukhaVaaggas/Index.vue'),
                  meta: { title: 'cruds.sukhaVaagga.title' }
                },
                
                {
                  path: 'sukha-vaaggas/:id',
                  name: 'sukha_vaaggas.show',
                  component: () => import('../cruds/SukhaVaaggas/Show.vue'),
                  meta: { title: 'cruds.sukhaVaagga.title' }
                },
                
                {
                  path: 'piya-vaggas',
                  name: 'piya_vaggas.index',
                  component: () => import('../cruds/PiyaVaggas/Index.vue'),
                  meta: { title: 'cruds.piyaVagga.title' }
                },
                
                {
                  path: 'piya-vaggas/:id',
                  name: 'piya_vaggas.show',
                  component: () => import('../cruds/PiyaVaggas/Show.vue'),
                  meta: { title: 'cruds.piyaVagga.title' }
                },
                
                {
                  path: 'koddha-vaggas',
                  name: 'koddha_vaggas.index',
                  component: () => import('../cruds/KoddhaVaggas/Index.vue'),
                  meta: { title: 'cruds.koddhaVagga.title' }
                },
               
                {
                  path: 'koddha-vaggas/:id',
                  name: 'koddha_vaggas.show',
                  component: () => import('../cruds/KoddhaVaggas/Show.vue'),
                  meta: { title: 'cruds.koddhaVagga.title' }
                },
                
                {
                  path: 'mala-vaggas',
                  name: 'mala_vaggas.index',
                  component: () => import('../cruds/MalaVaggas/Index.vue'),
                  meta: { title: 'cruds.malaVagga.title' }
                },
                
                {
                  path: 'mala-vaggas/:id',
                  name: 'mala_vaggas.show',
                  component: () => import('../cruds/MalaVaggas/Show.vue'),
                  meta: { title: 'cruds.malaVagga.title' }
                },
                
                {
                  path: 'dhammattha-vaggas',
                  name: 'dhammattha_vaggas.index',
                  component: () => import('../cruds/DhammatthaVaggas/Index.vue'),
                  meta: { title: 'cruds.dhammatthaVagga.title' }
                },
               
                {
                  path: 'dhammattha-vaggas/:id',
                  name: 'dhammattha_vaggas.show',
                  component: () => import('../cruds/DhammatthaVaggas/Show.vue'),
                  meta: { title: 'cruds.dhammatthaVagga.title' }
                },
               
                {
                  path: 'magga-vaggas',
                  name: 'magga_vaggas.index',
                  component: () => import('../cruds/MaggaVaggas/Index.vue'),
                  meta: { title: 'cruds.maggaVagga.title' }
                },
                
                {
                  path: 'magga-vaggas/:id',
                  name: 'magga_vaggas.show',
                  component: () => import('../cruds/MaggaVaggas/Show.vue'),
                  meta: { title: 'cruds.maggaVagga.title' }
                },
                
                {
                  path: 'pakinnaka-vaggas',
                  name: 'pakinnaka_vaggas.index',
                  component: () => import('../cruds/PakinnakaVaggas/Index.vue'),
                  meta: { title: 'cruds.pakinnakaVagga.title' }
                },
               
                {
                  path: 'pakinnaka-vaggas/:id',
                  name: 'pakinnaka_vaggas.show',
                  component: () => import('../cruds/PakinnakaVaggas/Show.vue'),
                  meta: { title: 'cruds.pakinnakaVagga.title' }
                },
                
                {
                  path: 'niraya-vaggas',
                  name: 'niraya_vaggas.index',
                  component: () => import('../cruds/NirayaVaggas/Index.vue'),
                  meta: { title: 'cruds.nirayaVagga.title' }
                },
               
                {
                  path: 'niraya-vaggas/:id',
                  name: 'niraya_vaggas.show',
                  component: () => import('../cruds/NirayaVaggas/Show.vue'),
                  meta: { title: 'cruds.nirayaVagga.title' }
                },
                
                {
                  path: 'naga-vaggas',
                  name: 'naga_vaggas.index',
                  component: () => import('../cruds/NagaVaggas/Index.vue'),
                  meta: { title: 'cruds.nagaVagga.title' }
                },
                
                {
                  path: 'naga-vaggas/:id',
                  name: 'naga_vaggas.show',
                  component: () => import('../cruds/NagaVaggas/Show.vue'),
                  meta: { title: 'cruds.nagaVagga.title' }
                },
                
                {
                  path: 'tahna-vaggas',
                  name: 'tahna_vaggas.index',
                  component: () => import('../cruds/TahnaVaggas/Index.vue'),
                  meta: { title: 'cruds.tahnaVagga.title' }
                },
                
                {
                  path: 'tahna-vaggas/:id',
                  name: 'tahna_vaggas.show',
                  component: () => import('../cruds/TahnaVaggas/Show.vue'),
                  meta: { title: 'cruds.tahnaVagga.title' }
                },
               
                {
                  path: 'bhikkhu-vaggas',
                  name: 'bhikkhu_vaggas.index',
                  component: () => import('../cruds/BhikkhuVaggas/Index.vue'),
                  meta: { title: 'cruds.bhikkhuVagga.title' }
                },
                
                {
                  path: 'bhikkhu-vaggas/:id',
                  name: 'bhikkhu_vaggas.show',
                  component: () => import('../cruds/BhikkhuVaggas/Show.vue'),
                  meta: { title: 'cruds.bhikkhuVagga.title' }
                },
               
                {
                  path: 'bramin-vaggas',
                  name: 'bramin_vaggas.index',
                  component: () => import('../cruds/BraminVaggas/Index.vue'),
                  meta: { title: 'cruds.braminVagga.title' }
                },
                
                {
                  path: 'bramin-vaggas/:id',
                  name: 'bramin_vaggas.show',
                  component: () => import('../cruds/BraminVaggas/Show.vue'),
                  meta: { title: 'cruds.braminVagga.title' }
                },
                
              ]
            },
            {
              path: 'jataka-pali',
              name: 'jataka_pali',
              component: View,
              // redirect: { name: 'ekaka_nipata_jatakas.index' },
              children: [
                {
                  path: 'ekaka-nipata-jataka',
                  name: 'ekaka_nipata_jataka',
                  component: View,
                  redirect: { name: 'apandaka_vaggas.index' },
                  children: [
                    {
                      path: 'apandaka-vaggas',
                      name: 'apandaka_vaggas.index',
                      component: () => import('../cruds/ApandakaVaggas/Index.vue'),
                      meta: { title: 'cruds.apandakaVagga.title' }
                    },
                    
                    {
                      path: 'apandaka-vaggas/:id',
                      name: 'apandaka_vaggas.show',
                      component: () => import('../cruds/ApandakaVaggas/Show.vue'),
                      meta: { title: 'cruds.apandakaVagga.title' }
                    },
                    
                    {
                      path: 'sila-vaggas',
                      name: 'sila_vaggas.index',
                      component: () => import('../cruds/SilaVaggas/Index.vue'),
                      meta: { title: 'cruds.silaVagga.title' }
                    },
                    
                    {
                      path: 'sila-vaggas/:id',
                      name: 'sila_vaggas.show',
                      component: () => import('../cruds/SilaVaggas/Show.vue'),
                      meta: { title: 'cruds.silaVagga.title' }
                    },
                    
                    {
                      path: 'kuringa-vaggas',
                      name: 'kuringa_vaggas.index',
                      component: () => import('../cruds/KuringaVaggas/Index.vue'),
                      meta: { title: 'cruds.kuringaVagga.title' }
                    },
                    
                    {
                      path: 'kuringa-vaggas/:id',
                      name: 'kuringa_vaggas.show',
                      component: () => import('../cruds/KuringaVaggas/Show.vue'),
                      meta: { title: 'cruds.kuringaVagga.title' }
                    },
                    
                    {
                      path: 'kulavaka-vaggas',
                      name: 'kulavaka_vaggas.index',
                      component: () => import('../cruds/KulavakaVaggas/Index.vue'),
                      meta: { title: 'cruds.kulavakaVagga.title' }
                    },
                   
                    {
                      path: 'kulavaka-vaggas/:id',
                      name: 'kulavaka_vaggas.show',
                      component: () => import('../cruds/KulavakaVaggas/Show.vue'),
                      meta: { title: 'cruds.kulavakaVagga.title' }
                    },
                    
                    {
                      path: 'atthakama-vaggas',
                      name: 'atthakama_vaggas.index',
                      component: () => import('../cruds/AtthakamaVaggas/Index.vue'),
                      meta: { title: 'cruds.atthakamaVagga.title' }
                    },
                   
                    {
                      path: 'atthakama-vaggas/:id',
                      name: 'atthakama_vaggas.show',
                      component: () => import('../cruds/AtthakamaVaggas/Show.vue'),
                      meta: { title: 'cruds.atthakamaVagga.title' }
                    },
                    
                    {
                      path: 'asisa-vaggas',
                      name: 'asisa_vaggas.index',
                      component: () => import('../cruds/AsisaVaggas/Index.vue'),
                      meta: { title: 'cruds.asisaVagga.title' }
                    },
                    
                    {
                      path: 'asisa-vaggas/:id',
                      name: 'asisa_vaggas.show',
                      component: () => import('../cruds/AsisaVaggas/Show.vue'),
                      meta: { title: 'cruds.asisaVagga.title' }
                    },
                    
                    {
                      path: 'itthi-vaggas',
                      name: 'itthi_vaggas.index',
                      component: () => import('../cruds/ItthiVaggas/Index.vue'),
                      meta: { title: 'cruds.itthiVagga.title' }
                    },
                   
                    {
                      path: 'itthi-vaggas/:id',
                      name: 'itthi_vaggas.show',
                      component: () => import('../cruds/ItthiVaggas/Show.vue'),
                      meta: { title: 'cruds.itthiVagga.title' }
                    },
                   
                    {
                      path: 'varuna-vaggas',
                      name: 'varuna_vaggas.index',
                      component: () => import('../cruds/VarunaVaggas/Index.vue'),
                      meta: { title: 'cruds.varunaVagga.title' }
                    },
                   
                    {
                      path: 'varuna-vaggas/:id',
                      name: 'varuna_vaggas.show',
                      component: () => import('../cruds/VarunaVaggas/Show.vue'),
                      meta: { title: 'cruds.varunaVagga.title' }
                    },
                   
                    {
                      path: 'apayima-vaggas',
                      name: 'apayima_vaggas.index',
                      component: () => import('../cruds/ApayimaVaggas/Index.vue'),
                      meta: { title: 'cruds.apayimaVagga.title' }
                    },
                    
                    {
                      path: 'apayima-vaggas/:id',
                      name: 'apayima_vaggas.show',
                      component: () => import('../cruds/ApayimaVaggas/Show.vue'),
                      meta: { title: 'cruds.apayimaVagga.title' }
                    },
                    
                    {
                      path: 'litta-vaggas',
                      name: 'litta_vaggas.index',
                      component: () => import('../cruds/LittaVaggas/Index.vue'),
                      meta: { title: 'cruds.littaVagga.title' }
                    },
                    
                    {
                      path: 'litta-vaggas/:id',
                      name: 'litta_vaggas.show',
                      component: () => import('../cruds/LittaVaggas/Show.vue'),
                      meta: { title: 'cruds.littaVagga.title' }
                    },
                   
                    {
                      path: 'parosata-vaggas',
                      name: 'parosata_vaggas.index',
                      component: () => import('../cruds/ParosataVaggas/Index.vue'),
                      meta: { title: 'cruds.parosataVagga.title' }
                    },
                   
                    {
                      path: 'parosata-vaggas/:id',
                      name: 'parosata_vaggas.show',
                      component: () => import('../cruds/ParosataVaggas/Show.vue'),
                      meta: { title: 'cruds.parosataVagga.title' }
                    },
                    
                    {
                      path: 'hanci-vaggas',
                      name: 'hanci_vaggas.index',
                      component: () => import('../cruds/HanciVaggas/Index.vue'),
                      meta: { title: 'cruds.hanciVagga.title' }
                    },
                    
                    {
                      path: 'hanci-vaggas/:id',
                      name: 'hanci_vaggas.show',
                      component: () => import('../cruds/HanciVaggas/Show.vue'),
                      meta: { title: 'cruds.hanciVagga.title' }
                    },
                   
                    {
                      path: 'kusanali-vaggas',
                      name: 'kusanali_vaggas.index',
                      component: () => import('../cruds/KusanaliVaggas/Index.vue'),
                      meta: { title: 'cruds.kusanaliVagga.title' }
                    },
                   
                    {
                      path: 'kusanali-vaggas/:id',
                      name: 'kusanali_vaggas.show',
                      component: () => import('../cruds/KusanaliVaggas/Show.vue'),
                      meta: { title: 'cruds.kusanaliVagga.title' }
                    },
                    
                    {
                      path: 'asampadana-vaggas',
                      name: 'asampadana_vaggas.index',
                      component: () => import('../cruds/AsampadanaVaggas/Index.vue'),
                      meta: { title: 'cruds.asampadanaVagga.title' }
                    },
                   
                    {
                      path: 'asampadana-vaggas/:id',
                      name: 'asampadana_vaggas.show',
                      component: () => import('../cruds/AsampadanaVaggas/Show.vue'),
                      meta: { title: 'cruds.asampadanaVagga.title' }
                    },
                    
                    {
                      path: 'kakamntaka-vaggas',
                      name: 'kakamntaka_vaggas.index',
                      component: () => import('../cruds/KakamntakaVaggas/Index.vue'),
                      meta: { title: 'cruds.kakamntakaVagga.title' }
                    },
                    
                    {
                      path: 'kakamntaka-vaggas/:id',
                      name: 'kakamntaka_vaggas.show',
                      component: () => import('../cruds/KakamntakaVaggas/Show.vue'),
                      meta: { title: 'cruds.kakamntakaVagga.title' }
                    },
                   
                  ]
                },
                {
                  path: 'jataka-dukanipatum',
                  name: 'jataka_dukanipatum',
                  component: View,
                  redirect: { name: 'danla_vaggas.index' },
                  children: [
                    {
                      path: 'danla-vaggas',
                      name: 'danla_vaggas.index',
                      component: () => import('../cruds/DanlaVaggas/Index.vue'),
                      meta: { title: 'cruds.danlaVagga.title' }
                    },
                   
                    {
                      path: 'danla-vaggas/:id',
                      name: 'danla_vaggas.show',
                      component: () => import('../cruds/DanlaVaggas/Show.vue'),
                      meta: { title: 'cruds.danlaVagga.title' }
                    },
                    
                    {
                      path: 'santhava-vaggas',
                      name: 'santhava_vaggas.index',
                      component: () => import('../cruds/SanthavaVaggas/Index.vue'),
                      meta: { title: 'cruds.santhavaVagga.title' }
                    },
                    
                    {
                      path: 'santhava-vaggas/:id',
                      name: 'santhava_vaggas.show',
                      component: () => import('../cruds/SanthavaVaggas/Show.vue'),
                      meta: { title: 'cruds.santhavaVagga.title' }
                    },
                    
                    {
                      path: 'kalayarna-vaggas',
                      name: 'kalayarna_vaggas.index',
                      component: () => import('../cruds/KalayarnaVaggas/Index.vue'),
                      meta: { title: 'cruds.kalayarnaVagga.title' }
                    },
                    
                    {
                      path: 'kalayarna-vaggas/:id',
                      name: 'kalayarna_vaggas.show',
                      component: () => import('../cruds/KalayarnaVaggas/Show.vue'),
                      meta: { title: 'cruds.kalayarnaVagga.title' }
                    },
                    
                    {
                      path: 'asadisa-vaggas',
                      name: 'asadisa_vaggas.index',
                      component: () => import('../cruds/AsadisaVaggas/Index.vue'),
                      meta: { title: 'cruds.asadisaVagga.title' }
                    },
                    
                    {
                      path: 'asadisa-vaggas/:id',
                      name: 'asadisa_vaggas.show',
                      component: () => import('../cruds/AsadisaVaggas/Show.vue'),
                      meta: { title: 'cruds.asadisaVagga.title' }
                    },
                    
                    {
                      path: 'ruhaka-vaggas',
                      name: 'ruhaka_vaggas.index',
                      component: () => import('../cruds/RuhakaVaggas/Index.vue'),
                      meta: { title: 'cruds.ruhakaVagga.title' }
                    },
                   
                    {
                      path: 'ruhaka-vaggas/:id',
                      name: 'ruhaka_vaggas.show',
                      component: () => import('../cruds/RuhakaVaggas/Show.vue'),
                      meta: { title: 'cruds.ruhakaVagga.title' }
                    },
                   
                    {
                      path: 'natamdanla-vaggas',
                      name: 'natamdanla_vaggas.index',
                      component: () => import('../cruds/NatamdanlaVaggas/Index.vue'),
                      meta: { title: 'cruds.natamdanlaVagga.title' }
                    },
                   
                    {
                      path: 'natamdanla-vaggas/:id',
                      name: 'natamdanla_vaggas.show',
                      component: () => import('../cruds/NatamdanlaVaggas/Show.vue'),
                      meta: { title: 'cruds.natamdanlaVagga.title' }
                    },
                    
                    {
                      path: 'biranathambha-vaggas',
                      name: 'biranathambha_vaggas.index',
                      component: () => import('../cruds/BiranathambhaVaggas/Index.vue'),
                      meta: { title: 'cruds.biranathambhaVagga.title' }
                    },
                    
                    {
                      path: 'biranathambha-vaggas/:id',
                      name: 'biranathambha_vaggas.show',
                      component: () => import('../cruds/BiranathambhaVaggas/Show.vue'),
                      meta: { title: 'cruds.biranathambhaVagga.title' }
                    },
                    
                    {
                      path: 'kasava-vaggas',
                      name: 'kasava_vaggas.index',
                      component: () => import('../cruds/KasavaVaggas/Index.vue'),
                      meta: { title: 'cruds.kasavaVagga.title' }
                    },
                    
                    {
                      path: 'kasava-vaggas/:id',
                      name: 'kasava_vaggas.show',
                      component: () => import('../cruds/KasavaVaggas/Show.vue'),
                      meta: { title: 'cruds.kasavaVagga.title' }
                    },
                    
                    {
                      path: 'upahana-vaggas',
                      name: 'upahana_vaggas.index',
                      component: () => import('../cruds/UpahanaVaggas/Index.vue'),
                      meta: { title: 'cruds.upahanaVagga.title' }
                    },
                    
                    {
                      path: 'upahana-vaggas/:id',
                      name: 'upahana_vaggas.show',
                      component: () => import('../cruds/UpahanaVaggas/Show.vue'),
                      meta: { title: 'cruds.upahanaVagga.title' }
                    },
                   
                    {
                      path: 'singala-vaggas',
                      name: 'singala_vaggas.index',
                      component: () => import('../cruds/SingalaVaggas/Index.vue'),
                      meta: { title: 'cruds.singalaVagga.title' }
                    },
                    
                    {
                      path: 'singala-vaggas/:id',
                      name: 'singala_vaggas.show',
                      component: () => import('../cruds/SingalaVaggas/Show.vue'),
                      meta: { title: 'cruds.singalaVagga.title' }
                    },
                   
                  ]
                },
                {
                  path: 'jataka-tika-nipatum',
                  name: 'jataka_tika_nipatum',
                  component: View,
                  redirect: { name: 'sinkappa_vaggas.index' },
                  children: [
                    {
                      path: 'sinkappa-vaggas',
                      name: 'sinkappa_vaggas.index',
                      component: () => import('../cruds/SinkappaVaggas/Index.vue'),
                      meta: { title: 'cruds.sinkappaVagga.title' }
                    },
                    
                    {
                      path: 'sinkappa-vaggas/:id',
                      name: 'sinkappa_vaggas.show',
                      component: () => import('../cruds/SinkappaVaggas/Show.vue'),
                      meta: { title: 'cruds.sinkappaVagga.title' }
                    },
                   
                    {
                      path: 'paduma-vaggas',
                      name: 'paduma_vaggas.index',
                      component: () => import('../cruds/PadumaVaggas/Index.vue'),
                      meta: { title: 'cruds.padumaVagga.title' }
                    },
                    
                    {
                      path: 'paduma-vaggas/:id',
                      name: 'paduma_vaggas.show',
                      component: () => import('../cruds/PadumaVaggas/Show.vue'),
                      meta: { title: 'cruds.padumaVagga.title' }
                    },
                    
                    {
                      path: 'udapana-vaggas',
                      name: 'udapana_vaggas.index',
                      component: () => import('../cruds/UdapanaVaggas/Index.vue'),
                      meta: { title: 'cruds.udapanaVagga.title' }
                    },
                   
                    {
                      path: 'udapana-vaggas/:id',
                      name: 'udapana_vaggas.show',
                      component: () => import('../cruds/UdapanaVaggas/Show.vue'),
                      meta: { title: 'cruds.udapanaVagga.title' }
                    },
                    
                    {
                      path: 'abbhantara-vaggas',
                      name: 'abbhantara_vaggas.index',
                      component: () => import('../cruds/AbbhantaraVaggas/Index.vue'),
                      meta: { title: 'cruds.abbhantaraVagga.title' }
                    },
                    
                    {
                      path: 'abbhantara-vaggas/:id',
                      name: 'abbhantara_vaggas.show',
                      component: () => import('../cruds/AbbhantaraVaggas/Show.vue'),
                      meta: { title: 'cruds.abbhantaraVagga.title' }
                    },
                    
                    {
                      path: 'kumbha-vaggas',
                      name: 'kumbha_vaggas.index',
                      component: () => import('../cruds/KumbhaVaggas/Index.vue'),
                      meta: { title: 'cruds.kumbhaVagga.title' }
                    },
                   
                    {
                      path: 'kumbha-vaggas/:id',
                      name: 'kumbha_vaggas.show',
                      component: () => import('../cruds/KumbhaVaggas/Show.vue'),
                      meta: { title: 'cruds.kumbhaVagga.title' }
                    },
                    
                  ]
                },
                {
                  path: 'jataka-catukka-nipatum',
                  name: 'jataka_catukka_nipatum',
                  component: View,
                  redirect: { name: 'kalinga_vaggas.index' },
                  children: [
                    {
                      path: 'kalinga-vaggas',
                      name: 'kalinga_vaggas.index',
                      component: () => import('../cruds/KalingaVaggas/Index.vue'),
                      meta: { title: 'cruds.kalingaVagga.title' }
                    },
                    
                    {
                      path: 'kalinga-vaggas/:id',
                      name: 'kalinga_vaggas.show',
                      component: () => import('../cruds/KalingaVaggas/Show.vue'),
                      meta: { title: 'cruds.kalingaVagga.title' }
                    },
                    
                    {
                      path: 'pucimanda-vaggas',
                      name: 'pucimanda_vaggas.index',
                      component: () => import('../cruds/PucimandaVaggas/Index.vue'),
                      meta: { title: 'cruds.pucimandaVagga.title' }
                    },
                    
                    {
                      path: 'pucimanda-vaggas/:id',
                      name: 'pucimanda_vaggas.show',
                      component: () => import('../cruds/PucimandaVaggas/Show.vue'),
                      meta: { title: 'cruds.pucimandaVagga.title' }
                    },
                    
                    {
                      path: 'kutidusaka-vaggas',
                      name: 'kutidusaka_vaggas.index',
                      component: () => import('../cruds/KutidusakaVaggas/Index.vue'),
                      meta: { title: 'cruds.kutidusakaVagga.title' }
                    },
                    
                    {
                      path: 'kutidusaka-vaggas/:id',
                      name: 'kutidusaka_vaggas.show',
                      component: () => import('../cruds/KutidusakaVaggas/Show.vue'),
                      meta: { title: 'cruds.kutidusakaVagga.title' }
                    },
                    
                    {
                      path: 'kokila-vaggas',
                      name: 'kokila_vaggas.index',
                      component: () => import('../cruds/KokilaVaggas/Index.vue'),
                      meta: { title: 'cruds.kokilaVagga.title' }
                    },
                    
                    {
                      path: 'kokila-vaggas/:id',
                      name: 'kokila_vaggas.show',
                      component: () => import('../cruds/KokilaVaggas/Show.vue'),
                      meta: { title: 'cruds.kokilaVagga.title' }
                    },
                    
                    {
                      path: 'cunakunala-vaggas',
                      name: 'cunakunala_vaggas.index',
                      component: () => import('../cruds/CunakunalaVaggas/Index.vue'),
                      meta: { title: 'cruds.cunakunalaVagga.title' }
                    },
                    
                    {
                      path: 'cunakunala-vaggas/:id',
                      name: 'cunakunala_vaggas.show',
                      component: () => import('../cruds/CunakunalaVaggas/Show.vue'),
                      meta: { title: 'cruds.cunakunalaVagga.title' }
                    },
                    
                  ]
                },
                {
                  path: 'jataka-paccau-nipatum',
                  name: 'jataka_paccau_nipatum',
                  component: View,
                  redirect: { name: 'manikunthala_vaggas.index' },
                  children: [
                    {
                      path: 'manikunthala-vaggas',
                      name: 'manikunthala_vaggas.index',
                      component: () => import('../cruds/ManikunthalaVaggas/Index.vue'),
                      meta: { title: 'cruds.manikunthalaVagga.title' }
                    },
                    
                    {
                      path: 'manikunthala-vaggas/:id',
                      name: 'manikunthala_vaggas.show',
                      component: () => import('../cruds/ManikunthalaVaggas/Show.vue'),
                      meta: { title: 'cruds.manikunthalaVagga.title' }
                    },
                    
                    {
                      path: 'vannaroha-vaggas',
                      name: 'vannaroha_vaggas.index',
                      component: () => import('../cruds/VannarohaVaggas/Index.vue'),
                      meta: { title: 'cruds.vannarohaVagga.title' }
                    },
                    
                    {
                      path: 'vannaroha-vaggas/:id',
                      name: 'vannaroha_vaggas.show',
                      component: () => import('../cruds/VannarohaVaggas/Show.vue'),
                      meta: { title: 'cruds.vannarohaVagga.title' }
                    },
                   
                    {
                      path: 'addha-vaggas',
                      name: 'addha_vaggas.index',
                      component: () => import('../cruds/AddhaVaggas/Index.vue'),
                      meta: { title: 'cruds.addhaVagga.title' }
                    },
                    
                    {
                      path: 'addha-vaggas/:id',
                      name: 'addha_vaggas.show',
                      component: () => import('../cruds/AddhaVaggas/Show.vue'),
                      meta: { title: 'cruds.addhaVagga.title' }
                    },
                   
                  ]
                },
                {
                  path: 'jataka-sakka-nipatum',
                  name: 'jataka_sakka_nipatum',
                  component: View,
                  redirect: { name: 'avariya_vaggas.index' },
                  children: [
                    {
                      path: 'avariya-vaggas',
                      name: 'avariya_vaggas.index',
                      component: () => import('../cruds/AvariyaVaggas/Index.vue'),
                      meta: { title: 'cruds.avariyaVagga.title' }
                    },
                   
                    {
                      path: 'avariya-vaggas/:id',
                      name: 'avariya_vaggas.show',
                      component: () => import('../cruds/AvariyaVaggas/Show.vue'),
                      meta: { title: 'cruds.avariyaVagga.title' }
                    },
                    
                    {
                      path: 'karaputta-vaggas',
                      name: 'karaputta_vaggas.index',
                      component: () => import('../cruds/KaraputtaVaggas/Index.vue'),
                      meta: { title: 'cruds.karaputtaVagga.title' }
                    },
                   
                    {
                      path: 'karaputta-vaggas/:id',
                      name: 'karaputta_vaggas.show',
                      component: () => import('../cruds/KaraputtaVaggas/Show.vue'),
                      meta: { title: 'cruds.karaputtaVagga.title' }
                    },
                    
                  ]
                },
                {
                  path: 'jataka-satta-nipatum',
                  name: 'jataka_satta_nipatum',
                  component: View,
                  redirect: { name: 'kukku_vaggas.index' },
                  children: [
                    {
                      path: 'kukku-vaggas',
                      name: 'kukku_vaggas.index',
                      component: () => import('../cruds/KukkuVaggas/Index.vue'),
                      meta: { title: 'cruds.kukkuVagga.title' }
                    },
                    
                    {
                      path: 'kukku-vaggas/:id',
                      name: 'kukku_vaggas.show',
                      component: () => import('../cruds/KukkuVaggas/Show.vue'),
                      meta: { title: 'cruds.kukkuVagga.title' }
                    },
                   
                    {
                      path: 'gandara-vaggas',
                      name: 'gandara_vaggas.index',
                      component: () => import('../cruds/GandaraVaggas/Index.vue'),
                      meta: { title: 'cruds.gandaraVagga.title' }
                    },
                   
                    {
                      path: 'gandara-vaggas/:id',
                      name: 'gandara_vaggas.show',
                      component: () => import('../cruds/GandaraVaggas/Show.vue'),
                      meta: { title: 'cruds.gandaraVagga.title' }
                    },
                    
                  ]
                },
                {
                  path: 'jataka-atthaka-nipata',
                  name: 'jataka_atthaka_nipata.index',
                  component: () => import('../cruds/JatakaAtthakaNipata/Index.vue'),
                  meta: { title: 'cruds.jatakaAtthakaNipatum.title' }
                },
               
                {
                  path: 'jataka-atthaka-nipata/:id',
                  name: 'jataka_atthaka_nipata.show',
                  component: () => import('../cruds/JatakaAtthakaNipata/Show.vue'),
                  meta: { title: 'cruds.jatakaAtthakaNipatum.title' }
                },
                
                {
                  path: 'jataka-navaka-nipata',
                  name: 'jataka_navaka_nipata.index',
                  component: () => import('../cruds/JatakaNavakaNipata/Index.vue'),
                  meta: { title: 'cruds.jatakaNavakaNipatum.title' }
                },
                
                {
                  path: 'jataka-navaka-nipata/:id',
                  name: 'jataka_navaka_nipata.show',
                  component: () => import('../cruds/JatakaNavakaNipata/Show.vue'),
                  meta: { title: 'cruds.jatakaNavakaNipatum.title' }
                },
                
                {
                  path: 'jataka-dasaka-nipata',
                  name: 'jataka_dasaka_nipata.index',
                  component: () => import('../cruds/JatakaDasakaNipata/Index.vue'),
                  meta: { title: 'cruds.jatakaDasakaNipatum.title' }
                },
                
                {
                  path: 'jataka-dasaka-nipata/:id',
                  name: 'jataka_dasaka_nipata.show',
                  component: () => import('../cruds/JatakaDasakaNipata/Show.vue'),
                  meta: { title: 'cruds.jatakaDasakaNipatum.title' }
                },
               
                {
                  path: 'jataka-ekadasaka-nipata',
                  name: 'jataka_ekadasaka_nipata.index',
                  component: () => import('../cruds/JatakaEkadasakaNipata/Index.vue'),
                  meta: { title: 'cruds.jatakaEkadasakaNipatum.title' }
                },
                
                {
                  path: 'jataka-ekadasaka-nipata/:id',
                  name: 'jataka_ekadasaka_nipata.show',
                  component: () => import('../cruds/JatakaEkadasakaNipata/Show.vue'),
                  meta: { title: 'cruds.jatakaEkadasakaNipatum.title' }
                },
               
                {
                  path: 'jataka-dvadasa-nipata',
                  name: 'jataka_dvadasa_nipata.index',
                  component: () => import('../cruds/JatakaDvadasaNipata/Index.vue'),
                  meta: { title: 'cruds.jatakaDvadasaNipatum.title' }
                },
                
                {
                  path: 'jataka-dvadasa-nipata/:id',
                  name: 'jataka_dvadasa_nipata.show',
                  component: () => import('../cruds/JatakaDvadasaNipata/Show.vue'),
                  meta: { title: 'cruds.jatakaDvadasaNipatum.title' }
                },
               
                {
                  path: 'jataka-tedasaka-nipata',
                  name: 'jataka_tedasaka_nipata.index',
                  component: () => import('../cruds/JatakaTedasakaNipata/Index.vue'),
                  meta: { title: 'cruds.jatakaTedasakaNipatum.title' }
                },
                
                {
                  path: 'jataka-tedasaka-nipata/:id',
                  name: 'jataka_tedasaka_nipata.show',
                  component: () => import('../cruds/JatakaTedasakaNipata/Show.vue'),
                  meta: { title: 'cruds.jatakaTedasakaNipatum.title' }
                },
                
                {
                  path: 'jataka-pakinnaka-nipata',
                  name: 'jataka_pakinnaka_nipata.index',
                  component: () => import('../cruds/JatakaPakinnakaNipata/Index.vue'),
                  meta: { title: 'cruds.jatakaPakinnakaNipatum.title' }
                },
                
                {
                  path: 'jataka-pakinnaka-nipata/:id',
                  name: 'jataka_pakinnaka_nipata.show',
                  component: () => import('../cruds/JatakaPakinnakaNipata/Show.vue'),
                  meta: { title: 'cruds.jatakaPakinnakaNipatum.title' }
                },
               
                {
                  path: 'jataka-visati-nipata',
                  name: 'jataka_visati_nipata.index',
                  component: () => import('../cruds/JatakaVisatiNipata/Index.vue'),
                  meta: { title: 'cruds.jatakaVisatiNipatum.title' }
                },
               
                {
                  path: 'jataka-visati-nipata/:id',
                  name: 'jataka_visati_nipata.show',
                  component: () => import('../cruds/JatakaVisatiNipata/Show.vue'),
                  meta: { title: 'cruds.jatakaVisatiNipatum.title' }
                },
                
                {
                  path: 'jataka-tamsa-nipata',
                  name: 'jataka_tamsa_nipata.index',
                  component: () => import('../cruds/JatakaTamsaNipata/Index.vue'),
                  meta: { title: 'cruds.jatakaTamsaNipatum.title' }
                },
                
                {
                  path: 'jataka-tamsa-nipata/:id',
                  name: 'jataka_tamsa_nipata.show',
                  component: () => import('../cruds/JatakaTamsaNipata/Show.vue'),
                  meta: { title: 'cruds.jatakaTamsaNipatum.title' }
                },
                
              ]
            },
            {
              path: 'jataka-pali-dutiyabhaga',
              name: 'jataka_pali_dutiyabhaga',
              component: View,
              redirect: { name: 'jataka_cattalisa_nipata.index' },
              children: [
                {
                  path: 'jataka-cattalisa-nipata',
                  name: 'jataka_cattalisa_nipata.index',
                  component: () => import('../cruds/JatakaCattalisaNipata/Index.vue'),
                  meta: { title: 'cruds.jatakaCattalisaNipatum.title' }
                },
                
                {
                  path: 'jataka-cattalisa-nipata/:id',
                  name: 'jataka_cattalisa_nipata.show',
                  component: () => import('../cruds/JatakaCattalisaNipata/Show.vue'),
                  meta: { title: 'cruds.jatakaCattalisaNipatum.title' }
                },
                
                {
                  path: 'jataka-pannasa-nipata',
                  name: 'jataka_pannasa_nipata.index',
                  component: () => import('../cruds/JatakaPannasaNipata/Index.vue'),
                  meta: { title: 'cruds.jatakaPannasaNipatum.title' }
                },
               
                {
                  path: 'jataka-pannasa-nipata/:id',
                  name: 'jataka_pannasa_nipata.show',
                  component: () => import('../cruds/JatakaPannasaNipata/Show.vue'),
                  meta: { title: 'cruds.jatakaPannasaNipatum.title' }
                },
                
                {
                  path: 'jataka-satthi-nipata',
                  name: 'jataka_satthi_nipata.index',
                  component: () => import('../cruds/JatakaSatthiNipata/Index.vue'),
                  meta: { title: 'cruds.jatakaSatthiNipatum.title' }
                },
               
                {
                  path: 'jataka-satthi-nipata/:id',
                  name: 'jataka_satthi_nipata.show',
                  component: () => import('../cruds/JatakaSatthiNipata/Show.vue'),
                  meta: { title: 'cruds.jatakaSatthiNipatum.title' }
                },
                
                {
                  path: 'jataka-sattati-nipata',
                  name: 'jataka_sattati_nipata.index',
                  component: () => import('../cruds/JatakaSattatiNipata/Index.vue'),
                  meta: { title: 'cruds.jatakaSattatiNipatum.title' }
                },
                
                {
                  path: 'jataka-sattati-nipata/:id',
                  name: 'jataka_sattati_nipata.show',
                  component: () => import('../cruds/JatakaSattatiNipata/Show.vue'),
                  meta: { title: 'cruds.jatakaSattatiNipatum.title' }
                },
                
                {
                  path: 'jataka-asiti-nipata',
                  name: 'jataka_asiti_nipata.index',
                  component: () => import('../cruds/JatakaAsitiNipata/Index.vue'),
                  meta: { title: 'cruds.jatakaAsitiNipatum.title' }
                },
                
                {
                  path: 'jataka-asiti-nipata/:id',
                  name: 'jataka_asiti_nipata.show',
                  component: () => import('../cruds/JatakaAsitiNipata/Show.vue'),
                  meta: { title: 'cruds.jatakaAsitiNipatum.title' }
                },
                
                {
                  path: 'jataka-maha-nipata',
                  name: 'jataka_maha_nipata.index',
                  component: () => import('../cruds/JatakaMahaNipata/Index.vue'),
                  meta: { title: 'cruds.jatakaMahaNipatum.title' }
                },
                
                {
                  path: 'jataka-maha-nipata/:id',
                  name: 'jataka_maha_nipata.show',
                  component: () => import('../cruds/JatakaMahaNipata/Show.vue'),
                  meta: { title: 'cruds.jatakaMahaNipatum.title' }
                },
               
              ]
            },
            {
              path: 'abhidhammattha-sangaha',
              name: 'abhidhammattha_sangaha',
              component: View,
              redirect: { name: 'abhidhamma_citta_lessons.index' },
              children: [
                {
                  path: 'abhidhamma-citta-lessons',
                  name: 'abhidhamma_citta_lessons.index',
                  component: () => import('../cruds/AbhidhammaCittaLessons/Index.vue'),
                  meta: { title: 'cruds.abhidhammaCittaLesson.title' }
                },
                
                {
                  path: 'abhidhamma-citta-lessons/:id',
                  name: 'abhidhamma_citta_lessons.show',
                  component: () => import('../cruds/AbhidhammaCittaLessons/Show.vue'),
                  meta: { title: 'cruds.abhidhammaCittaLesson.title' }
                },
                
                {
                  path: 'abhidhamma-cetasika-lessons',
                  name: 'abhidhamma_cetasika_lessons.index',
                  component: () =>
                    import('../cruds/AbhidhammaCetasikaLessons/Index.vue'),
                  meta: { title: 'cruds.abhidhammaCetasikaLesson.title' }
                },
               
                {
                  path: 'abhidhamma-cetasika-lessons/:id',
                  name: 'abhidhamma_cetasika_lessons.show',
                  component: () =>
                    import('../cruds/AbhidhammaCetasikaLessons/Show.vue'),
                  meta: { title: 'cruds.abhidhammaCetasikaLesson.title' }
                },
                
                {
                  path: 'abhiddhamma-pakim-lessons',
                  name: 'abhiddhamma_pakim_lessons.index',
                  component: () => import('../cruds/AbhiddhammaPakimLessons/Index.vue'),
                  meta: { title: 'cruds.abhiddhammaPakimLesson.title' }
                },
                
                {
                  path: 'abhiddhamma-pakim-lessons/:id',
                  name: 'abhiddhamma_pakim_lessons.show',
                  component: () => import('../cruds/AbhiddhammaPakimLessons/Show.vue'),
                  meta: { title: 'cruds.abhiddhammaPakimLesson.title' }
                },
               
                {
                  path: 'abhiddhamma-vithi-lessons',
                  name: 'abhiddhamma_vithi_lessons.index',
                  component: () => import('../cruds/AbhiddhammaVithiLessons/Index.vue'),
                  meta: { title: 'cruds.abhiddhammaVithiLesson.title' }
                },
                
                {
                  path: 'abhiddhamma-vithi-lessons/:id',
                  name: 'abhiddhamma_vithi_lessons.show',
                  component: () => import('../cruds/AbhiddhammaVithiLessons/Show.vue'),
                  meta: { title: 'cruds.abhiddhammaVithiLesson.title' }
                },
                
                {
                  path: 'abhidhamma-vithimote-lessons',
                  name: 'abhidhamma_vithimote_lessons.index',
                  component: () =>
                    import('../cruds/AbhidhammaVithimoteLessons/Index.vue'),
                  meta: { title: 'cruds.abhidhammaVithimoteLesson.title' }
                },
                
                {
                  path: 'abhidhamma-vithimote-lessons/:id',
                  name: 'abhidhamma_vithimote_lessons.show',
                  component: () =>
                    import('../cruds/AbhidhammaVithimoteLessons/Show.vue'),
                  meta: { title: 'cruds.abhidhammaVithimoteLesson.title' }
                },
                
                {
                  path: 'abhidhamma-rupa-lessons',
                  name: 'abhidhamma_rupa_lessons.index',
                  component: () => import('../cruds/AbhidhammaRupaLessons/Index.vue'),
                  meta: { title: 'cruds.abhidhammaRupaLesson.title' }
                },
                
                {
                  path: 'abhidhamma-rupa-lessons/:id',
                  name: 'abhidhamma_rupa_lessons.show',
                  component: () => import('../cruds/AbhidhammaRupaLessons/Show.vue'),
                  meta: { title: 'cruds.abhidhammaRupaLesson.title' }
                },
               
                {
                  path: 'abhidhamma-samuci-lessons',
                  name: 'abhidhamma_samuci_lessons.index',
                  component: () => import('../cruds/AbhidhammaSamuciLessons/Index.vue'),
                  meta: { title: 'cruds.abhidhammaSamuciLesson.title' }
                },
               
                {
                  path: 'abhidhamma-samuci-lessons/:id',
                  name: 'abhidhamma_samuci_lessons.show',
                  component: () => import('../cruds/AbhidhammaSamuciLessons/Show.vue'),
                  meta: { title: 'cruds.abhidhammaSamuciLesson.title' }
                },
                
                {
                  path: 'abhidhamma-passi-lessons',
                  name: 'abhidhamma_passi_lessons.index',
                  component: () => import('../cruds/AbhidhammaPassiLessons/Index.vue'),
                  meta: { title: 'cruds.abhidhammaPassiLesson.title' }
                },
               
                {
                  path: 'abhidhamma-passi-lessons/:id',
                  name: 'abhidhamma_passi_lessons.show',
                  component: () => import('../cruds/AbhidhammaPassiLessons/Show.vue'),
                  meta: { title: 'cruds.abhidhammaPassiLesson.title' }
                },
                
                {
                  path: 'abhidhamma-kamathan-lessons',
                  name: 'abhidhamma_kamathan_lessons.index',
                  component: () =>
                    import('../cruds/AbhidhammaKamathanLessons/Index.vue'),
                  meta: { title: 'cruds.abhidhammaKamathanLesson.title' }
                },
               
                {
                  path: 'abhidhamma-kamathan-lessons/:id',
                  name: 'abhidhamma_kamathan_lessons.show',
                  component: () =>
                    import('../cruds/AbhidhammaKamathanLessons/Show.vue'),
                  meta: { title: 'cruds.abhidhammaKamathanLesson.title' }
                },
                
              ]
            },
            {
              path: 'paligrammar',
              name: 'paligrammar',
              component: View,
              redirect: { name: 'grammar_chapters.index' },
              children: [
                {
                  path: 'grammar-chapters',
                  name: 'grammar_chapters.index',
                  component: () => import('../cruds/GrammarChapters/Index.vue'),
                  meta: { title: 'cruds.grammarChapter.title' }
                },
                
                {
                  path: 'grammar-chapters/:id',
                  name: 'grammar_chapters.show',
                  component: () => import('../cruds/GrammarChapters/Show.vue'),
                  meta: { title: 'cruds.grammarChapter.title' }
                },
                
                {
                  path: 'grammar-sandis',
                  name: 'grammar_sandis.index',
                  component: () => import('../cruds/GrammarSandis/Index.vue'),
                  meta: { title: 'cruds.grammarSandi.title' }
                },
                
                {
                  path: 'grammar-sandis/:id',
                  name: 'grammar_sandis.show',
                  component: () => import('../cruds/GrammarSandis/Show.vue'),
                  meta: { title: 'cruds.grammarSandi.title' }
                },
                
                {
                  path: 'grammar-namas',
                  name: 'grammar_namas.index',
                  component: () => import('../cruds/GrammarNamas/Index.vue'),
                  meta: { title: 'cruds.grammarNama.title' }
                },
               
                {
                  path: 'grammar-namas/:id',
                  name: 'grammar_namas.show',
                  component: () => import('../cruds/GrammarNamas/Show.vue'),
                  meta: { title: 'cruds.grammarNama.title' }
                },
                
                {
                  path: 'grammar-karakas',
                  name: 'grammar_karakas.index',
                  component: () => import('../cruds/GrammarKarakas/Index.vue'),
                  meta: { title: 'cruds.grammarKaraka.title' }
                },
                
                {
                  path: 'grammar-karakas/:id',
                  name: 'grammar_karakas.show',
                  component: () => import('../cruds/GrammarKarakas/Show.vue'),
                  meta: { title: 'cruds.grammarKaraka.title' }
                },
                
                {
                  path: 'grammar-samasas',
                  name: 'grammar_samasas.index',
                  component: () => import('../cruds/GrammarSamasas/Index.vue'),
                  meta: { title: 'cruds.grammarSamasa.title' }
                },
                
                {
                  path: 'grammar-samasas/:id',
                  name: 'grammar_samasas.show',
                  component: () => import('../cruds/GrammarSamasas/Show.vue'),
                  meta: { title: 'cruds.grammarSamasa.title' }
                },
                
                {
                  path: 'grammar-tadisas',
                  name: 'grammar_tadisas.index',
                  component: () => import('../cruds/GrammarTadisas/Index.vue'),
                  meta: { title: 'cruds.grammarTadisa.title' }
                },
                
                {
                  path: 'grammar-tadisas/:id',
                  name: 'grammar_tadisas.show',
                  component: () => import('../cruds/GrammarTadisas/Show.vue'),
                  meta: { title: 'cruds.grammarTadisa.title' }
                },
                
                {
                  path: 'grammar-arachata',
                  name: 'grammar_arachata.index',
                  component: () => import('../cruds/GrammarArachata/Index.vue'),
                  meta: { title: 'cruds.grammarArachatum.title' }
                },
               
                {
                  path: 'grammar-arachata/:id',
                  name: 'grammar_arachata.show',
                  component: () => import('../cruds/GrammarArachata/Show.vue'),
                  meta: { title: 'cruds.grammarArachatum.title' }
                },
                
                {
                  path: 'grammar-kibhidhanas',
                  name: 'grammar_kibhidhanas.index',
                  component: () => import('../cruds/GrammarKibhidhanas/Index.vue'),
                  meta: { title: 'cruds.grammarKibhidhana.title' }
                },
                
                {
                  path: 'grammar-kibhidhanas/:id',
                  name: 'grammar_kibhidhanas.show',
                  component: () => import('../cruds/GrammarKibhidhanas/Show.vue'),
                  meta: { title: 'cruds.grammarKibhidhana.title' }
                },
                
                {
                  path: 'grammar-unadikappas',
                  name: 'grammar_unadikappas.index',
                  component: () => import('../cruds/GrammarUnadikappas/Index.vue'),
                  meta: { title: 'cruds.grammarUnadikappa.title' }
                },
                
                {
                  path: 'grammar-unadikappas/:id',
                  name: 'grammar_unadikappas.show',
                  component: () => import('../cruds/GrammarUnadikappas/Show.vue'),
                  meta: { title: 'cruds.grammarUnadikappa.title' }
                },
                
              ]
            }
      
            // {
            //     path: '/bikkhu-nidanas',
            //     name: 'bikkhu_nidanas.index',
            //     component: () => import('../cruds/BikkhuNidanas/Index.vue'),
            //     meta: { title: 'BikkhuNidanas' }
            // },
            // {
            //     path: '/bikkhu-nidanas/:id',
            //     name: 'bikkhu_nidanas.show',
            //     component: () => import('../cruds/BikkhuNidanas/Show.vue'),
            //     meta: { title: 'bikkhuNidana-title' }
            //   },
        ],
       
       
    },
    
//buddhist educational web-app
//Traditional Buddhist Educational Web-App
//TBEWA
]
export default new VueRouter({
    mode: 'history',
    base: '/user',
    routes
})
