import Vue from 'vue'
import Vuex from 'vuex'
import Alert from './modules/alert'
import I18NStore from './modules/i18n'
import BikkhuNidanasIndex from './curds/BikkhuNidanas/index'
import BikkhuNidanasSingle from './curds/BikkhuNidanas/single'
import BikkhuParajikasIndex from './curds/BikkhuParajikas/index'
import BikkhuParajikasSingle from './curds/BikkhuParajikas/single'
import BikkhuSamgadisesasIndex from './curds/BikkhuSamgadisesas/index'
import BikkhuSamgadisesasSingle from './curds/BikkhuSamgadisesas/single'
import BikkhuAniyataIndex from './curds/BikkhuAniyata/index'
import BikkhuAniyataSingle from './curds/BikkhuAniyata/single'
import BikkhuNissaggiyasIndex from './curds/BikkhuNissaggiyas/index'
import BikkhuNissaggiyasSingle from './curds/BikkhuNissaggiyas/single'
import BikkhuSuddhapacittiyasIndex from './curds/BikkhuSuddhapacittiyas/index'
import BikkhuSuddhapacittiyasSingle from './curds/BikkhuSuddhapacittiyas/single'
import BikkhuPatidesaniyasIndex from './curds/BikkhuPatidesaniyas/index'
import BikkhuPatidesaniyasSingle from './curds/BikkhuPatidesaniyas/single'
import BikkhuSekhiyasIndex from './curds/BikkhuSekhiyas/index'
import BikkhuSekhiyasSingle from './curds/BikkhuSekhiyas/single'
import BikkhuAdhikaranasIndex from './curds/BikkhuAdhikaranas/index'
import BikkhuAdhikaranasSingle from './curds/BikkhuAdhikaranas/single'
import BikkhuniNidanasIndex from './curds/BikkhuniNidanas/index'
import BikkhuniNidanasSingle from './curds/BikkhuniNidanas/single'
import BikkhuniParajikasIndex from './curds/BikkhuniParajikas/index'
import BikkhuniParajikasSingle from './curds/BikkhuniParajikas/single'
import BikkhuniSamgadisesasIndex from './curds/BikkhuniSamgadisesas/index'
import BikkhuniSamgadisesasSingle from './curds/BikkhuniSamgadisesas/single'
import BikkhuniNissaggiyasIndex from './curds/BikkhuniNissaggiyas/index'
import BikkhuniNissaggiyasSingle from './curds/BikkhuniNissaggiyas/single'
import BikkhuniSuddhapacittiyasIndex from './curds/BikkhuniSuddhapacittiyas/index'
import BikkhuniSuddhapacittiyasSingle from './curds/BikkhuniSuddhapacittiyas/single'
import BikkhuniPatidesaniyaniyasIndex from './curds/BikkhuniPatidesaniyaniyas/index'
import BikkhuniPatidesaniyaniyasSingle from './curds/BikkhuniPatidesaniyaniyas/single'
import BikkhuniSekhiyasIndex from './curds/BikkhuniSekhiyas/index'
import BikkhuniSekhiyasSingle from './curds/BikkhuniSekhiyas/single'
import BikkhuniAdhikaranasIndex from './curds/BikkhuniAdhikaranas/index'
import BikkhuniAdhikaranasSingle from './curds/BikkhuniAdhikaranas/single'
import BikkhuniAniyataIndex from './curds/BikkhuniAniyata/index'
import BikkhuniAniyataSingle from './curds/BikkhuniAniyata/single'
//dhammapada & jataka 
import YamakaVaggaVersesIndex from './curds/YamakaVaggaVerses/index'
import YamakaVaggaVersesSingle from './curds/YamakaVaggaVerses/single'
import AppamadaVaggasIndex from './curds/AppamadaVaggas/index'
import AppamadaVaggasSingle from './curds/AppamadaVaggas/single'
import CittaVaggasIndex from './curds/CittaVaggas/index'
import CittaVaggasSingle from './curds/CittaVaggas/single'
import PupphaVaggasIndex from './curds/PupphaVaggas/index'
import PupphaVaggasSingle from './curds/PupphaVaggas/single'
import BalaVaggasIndex from './curds/BalaVaggas/index'
import BalaVaggasSingle from './curds/BalaVaggas/single'
import PanditaVaggasIndex from './curds/PanditaVaggas/index'
import PanditaVaggasSingle from './curds/PanditaVaggas/single'
import ArahantaVaggasIndex from './curds/ArahantaVaggas/index'
import ArahantaVaggasSingle from './curds/ArahantaVaggas/single'
import SahassaVaggasIndex from './curds/SahassaVaggas/index'
import SahassaVaggasSingle from './curds/SahassaVaggas/single'
import DantaVaggasIndex from './curds/DantaVaggas/index'
import DantaVaggasSingle from './curds/DantaVaggas/single'
import JaraVaggasIndex from './curds/JaraVaggas/index'
import JaraVaggasSingle from './curds/JaraVaggas/single'
import AttaVaggasIndex from './curds/AttaVaggas/index'
import AttaVaggasSingle from './curds/AttaVaggas/single'
import LawkaVaggasIndex from './curds/LawkaVaggas/index'
import LawkaVaggasSingle from './curds/LawkaVaggas/single'
import BuddhaVaggasIndex from './curds/BuddhaVaggas/index'
import BuddhaVaggasSingle from './curds/BuddhaVaggas/single'
import SukhaVaaggasIndex from './curds/SukhaVaaggas/index'
import SukhaVaaggasSingle from './curds/SukhaVaaggas/single'
import PiyaVaggasIndex from './curds/PiyaVaggas/index'
import PiyaVaggasSingle from './curds/PiyaVaggas/single'
import KoddhaVaggasIndex from './curds/KoddhaVaggas/index'
import KoddhaVaggasSingle from './curds/KoddhaVaggas/single'
import MalaVaggasIndex from './curds/MalaVaggas/index'
import MalaVaggasSingle from './curds/MalaVaggas/single'
import DhammatthaVaggasIndex from './curds/DhammatthaVaggas/index'
import DhammatthaVaggasSingle from './curds/DhammatthaVaggas/single'
import MaggaVaggasIndex from './curds/MaggaVaggas/index'
import MaggaVaggasSingle from './curds/MaggaVaggas/single'
import PakinnakaVaggasIndex from './curds/PakinnakaVaggas/index'
import PakinnakaVaggasSingle from './curds/PakinnakaVaggas/single'
import NirayaVaggasIndex from './curds/NirayaVaggas/index'
import NirayaVaggasSingle from './curds/NirayaVaggas/single'
import PapaVaggasIndex from './curds/PapaVaggas/index'
import PapaVaggasSingle from './curds/PapaVaggas/single'
import NagaVaggasIndex from './curds/NagaVaggas/index'
import NagaVaggasSingle from './curds/NagaVaggas/single'
import TahnaVaggasIndex from './curds/TahnaVaggas/index'
import TahnaVaggasSingle from './curds/TahnaVaggas/single'
import BhikkhuVaggasIndex from './curds/BhikkhuVaggas/index'
import BhikkhuVaggasSingle from './curds/BhikkhuVaggas/single'
import BraminVaggasIndex from './curds/BraminVaggas/index'
import BraminVaggasSingle from './curds/BraminVaggas/single'
import ApandakaVaggasIndex from './curds/ApandakaVaggas/index'
import ApandakaVaggasSingle from './curds/ApandakaVaggas/single'
import SilaVaggasIndex from './curds/SilaVaggas/index'
import SilaVaggasSingle from './curds/SilaVaggas/single'
import KuringaVaggasIndex from './curds/KuringaVaggas/index'
import KuringaVaggasSingle from './curds/KuringaVaggas/single'
import KulavakaVaggasIndex from './curds/KulavakaVaggas/index'
import KulavakaVaggasSingle from './curds/KulavakaVaggas/single'
import AtthakamaVaggasIndex from './curds/AtthakamaVaggas/index'
import AtthakamaVaggasSingle from './curds/AtthakamaVaggas/single'
import AsisaVaggasIndex from './curds/AsisaVaggas/index'
import AsisaVaggasSingle from './curds/AsisaVaggas/single'
import ItthiVaggasIndex from './curds/ItthiVaggas/index'
import ItthiVaggasSingle from './curds/ItthiVaggas/single'
import VarunaVaggasIndex from './curds/VarunaVaggas/index'
import VarunaVaggasSingle from './curds/VarunaVaggas/single'
import ApayimaVaggasIndex from './curds/ApayimaVaggas/index'
import ApayimaVaggasSingle from './curds/ApayimaVaggas/single'
import LittaVaggasIndex from './curds/LittaVaggas/index'
import LittaVaggasSingle from './curds/LittaVaggas/single'
import ParosataVaggasIndex from './curds/ParosataVaggas/index'
import ParosataVaggasSingle from './curds/ParosataVaggas/single'
import HanciVaggasIndex from './curds/HanciVaggas/index'
import HanciVaggasSingle from './curds/HanciVaggas/single'
import KusanaliVaggasIndex from './curds/KusanaliVaggas/index'
import KusanaliVaggasSingle from './curds/KusanaliVaggas/single'
import AsampadanaVaggasIndex from './curds/AsampadanaVaggas/index'
import AsampadanaVaggasSingle from './curds/AsampadanaVaggas/single'
import KakamntakaVaggasIndex from './curds/KakamntakaVaggas/index'
import KakamntakaVaggasSingle from './curds/KakamntakaVaggas/single'
import DanlaVaggasIndex from './curds/DanlaVaggas/index'
import DanlaVaggasSingle from './curds/DanlaVaggas/single'
import SanthavaVaggasIndex from './curds/SanthavaVaggas/index'
import SanthavaVaggasSingle from './curds/SanthavaVaggas/single'
import KalayarnaVaggasIndex from './curds/KalayarnaVaggas/index'
import KalayarnaVaggasSingle from './curds/KalayarnaVaggas/single'
import AsadisaVaggasIndex from './curds/AsadisaVaggas/index'
import AsadisaVaggasSingle from './curds/AsadisaVaggas/single'
import RuhakaVaggasIndex from './curds/RuhakaVaggas/index'
import RuhakaVaggasSingle from './curds/RuhakaVaggas/single'
import NatamdanlaVaggasIndex from './curds/NatamdanlaVaggas/index'
import NatamdanlaVaggasSingle from './curds/NatamdanlaVaggas/single'
import BiranathambhaVaggasIndex from './curds/BiranathambhaVaggas/index'
import BiranathambhaVaggasSingle from './curds/BiranathambhaVaggas/single'
import KasavaVaggasIndex from './curds/KasavaVaggas/index'
import KasavaVaggasSingle from './curds/KasavaVaggas/single'
import UpahanaVaggasIndex from './curds/UpahanaVaggas/index'
import UpahanaVaggasSingle from './curds/UpahanaVaggas/single'
import SingalaVaggasIndex from './curds/SingalaVaggas/index'
import SingalaVaggasSingle from './curds/SingalaVaggas/single'
import SinkappaVaggasIndex from './curds/SinkappaVaggas/index'
import SinkappaVaggasSingle from './curds/SinkappaVaggas/single'
import PadumaVaggasIndex from './curds/PadumaVaggas/index'
import PadumaVaggasSingle from './curds/PadumaVaggas/single'
import UdapanaVaggasIndex from './curds/UdapanaVaggas/index'
import UdapanaVaggasSingle from './curds/UdapanaVaggas/single'
import AbbhantaraVaggasIndex from './curds/AbbhantaraVaggas/index'
import AbbhantaraVaggasSingle from './curds/AbbhantaraVaggas/single'
import KumbhaVaggasIndex from './curds/KumbhaVaggas/index'
import KumbhaVaggasSingle from './curds/KumbhaVaggas/single'
import KalingaVaggasIndex from './curds/KalingaVaggas/index'
import KalingaVaggasSingle from './curds/KalingaVaggas/single'
//new edit
import PucimandaVaggasIndex from './curds/PucimandaVaggas/index'
import PucimandaVaggasSingle from './curds/PucimandaVaggas/single'
import KutidusakaVaggasIndex from './curds/KutidusakaVaggas/index'
import KutidusakaVaggasSingle from './curds/KutidusakaVaggas/single'
import KokilaVaggasIndex from './curds/KokilaVaggas/index'
import KokilaVaggasSingle from './curds/KokilaVaggas/single'
import CunakunalaVaggasIndex from './curds/CunakunalaVaggas/index'
import CunakunalaVaggasSingle from './curds/CunakunalaVaggas/single'
import ManikunthalaVaggasIndex from './curds/ManikunthalaVaggas/index'
import ManikunthalaVaggasSingle from './curds/ManikunthalaVaggas/single'
import VannarohaVaggasIndex from './curds/VannarohaVaggas/index'
import VannarohaVaggasSingle from './curds/VannarohaVaggas/single'
import AddhaVaggasIndex from './curds/AddhaVaggas/index'
import AddhaVaggasSingle from './curds/AddhaVaggas/single'
import AvariyaVaggasIndex from './curds/AvariyaVaggas/index'
import AvariyaVaggasSingle from './curds/AvariyaVaggas/single'
import KaraputtaVaggasIndex from './curds/KaraputtaVaggas/index'
import KaraputtaVaggasSingle from './curds/KaraputtaVaggas/single'
import KukkuVaggasIndex from './curds/KukkuVaggas/index'
import KukkuVaggasSingle from './curds/KukkuVaggas/single'
import GandaraVaggasIndex from './curds/GandaraVaggas/index'
import GandaraVaggasSingle from './curds/GandaraVaggas/single'
import JatakaAtthakaNipataIndex from './curds/JatakaAtthakaNipata/index'
import JatakaAtthakaNipataSingle from './curds/JatakaAtthakaNipata/single'
import JatakaNavakaNipataIndex from './curds/JatakaNavakaNipata/index'
import JatakaNavakaNipataSingle from './curds/JatakaNavakaNipata/single'
import JatakaDasakaNipataIndex from './curds/JatakaDasakaNipata/index'
import JatakaDasakaNipataSingle from './curds/JatakaDasakaNipata/single'
import JatakaEkadasakaNipataIndex from './curds/JatakaEkadasakaNipata/index'
import JatakaEkadasakaNipataSingle from './curds/JatakaEkadasakaNipata/single'
import JatakaDvadasaNipataIndex from './curds/JatakaDvadasaNipata/index'
import JatakaDvadasaNipataSingle from './curds/JatakaDvadasaNipata/single'
import JatakaTedasakaNipataIndex from './curds/JatakaTedasakaNipata/index'
import JatakaTedasakaNipataSingle from './curds/JatakaTedasakaNipata/single'
import JatakaPakinnakaNipataIndex from './curds/JatakaPakinnakaNipata/index'
import JatakaPakinnakaNipataSingle from './curds/JatakaPakinnakaNipata/single'
import JatakaVisatiNipataIndex from './curds/JatakaVisatiNipata/index'
import JatakaVisatiNipataSingle from './curds/JatakaVisatiNipata/single'
import JatakaTamsaNipataIndex from './curds/JatakaTamsaNipata/index'
import JatakaTamsaNipataSingle from './curds/JatakaTamsaNipata/single'
import JatakaCattalisaNipataIndex from './curds/JatakaCattalisaNipata/index'
import JatakaCattalisaNipataSingle from './curds/JatakaCattalisaNipata/single'
import JatakaPannasaNipataIndex from './curds/JatakaPannasaNipata/index'
import JatakaPannasaNipataSingle from './curds/JatakaPannasaNipata/single'
import JatakaSatthiNipataIndex from './curds/JatakaSatthiNipata/index'
import JatakaSatthiNipataSingle from './curds/JatakaSatthiNipata/single'
import JatakaSattatiNipataIndex from './curds/JatakaSattatiNipata/index'
import JatakaSattatiNipataSingle from './curds/JatakaSattatiNipata/single'
import JatakaAsitiNipataIndex from './curds/JatakaAsitiNipata/index'
import JatakaAsitiNipataSingle from './curds/JatakaAsitiNipata/single'
import JatakaMahaNipataIndex from './curds/JatakaMahaNipata/index'
import JatakaMahaNipataSingle from './curds/JatakaMahaNipata/single'
import AbhidhammaCittaLessonsIndex from './curds/AbhidhammaCittaLessons/index'
import AbhidhammaCittaLessonsSingle from './curds/AbhidhammaCittaLessons/single'
import AbhidhammaCetasikaLessonsIndex from './curds/AbhidhammaCetasikaLessons/index'
import AbhidhammaCetasikaLessonsSingle from './curds/AbhidhammaCetasikaLessons/single'
import AbhiddhammaPakimLessonsIndex from './curds/AbhiddhammaPakimLessons/index'
import AbhiddhammaPakimLessonsSingle from './curds/AbhiddhammaPakimLessons/single'
import AbhiddhammaVithiLessonsIndex from './curds/AbhiddhammaVithiLessons/index'
import AbhiddhammaVithiLessonsSingle from './curds/AbhiddhammaVithiLessons/single'
import AbhidhammaVithimoteLessonsIndex from './curds/AbhidhammaVithimoteLessons/index'
import AbhidhammaVithimoteLessonsSingle from './curds/AbhidhammaVithimoteLessons/single'
import AbhidhammaRupaLessonsIndex from './curds/AbhidhammaRupaLessons/index'
import AbhidhammaRupaLessonsSingle from './curds/AbhidhammaRupaLessons/single'
import AbhidhammaSamuciLessonsIndex from './curds/AbhidhammaSamuciLessons/index'
import AbhidhammaSamuciLessonsSingle from './curds/AbhidhammaSamuciLessons/single'
import AbhidhammaPassiLessonsIndex from './curds/AbhidhammaPassiLessons/index'
import AbhidhammaPassiLessonsSingle from './curds/AbhidhammaPassiLessons/single'
import AbhidhammaKamathanLessonsIndex from './curds/AbhidhammaKamathanLessons/index'
import AbhidhammaKamathanLessonsSingle from './curds/AbhidhammaKamathanLessons/single'
import GrammarChaptersIndex from './curds/GrammarChapters/index'
import GrammarChaptersSingle from './curds/GrammarChapters/single'
import GrammarSandisIndex from './curds/GrammarSandis/index'
import GrammarSandisSingle from './curds/GrammarSandis/single'
import GrammarNamasIndex from './curds/GrammarNamas/index'
import GrammarNamasSingle from './curds/GrammarNamas/single'
import GrammarKarakasIndex from './curds/GrammarKarakas/index'
import GrammarKarakasSingle from './curds/GrammarKarakas/single'
import GrammarSamasasIndex from './curds/GrammarSamasas/index'
import GrammarSamasasSingle from './curds/GrammarSamasas/single'
import GrammarTadisasIndex from './curds/GrammarTadisas/index'
import GrammarTadisasSingle from './curds/GrammarTadisas/single'
import GrammarArachataIndex from './curds/GrammarArachata/index'
import GrammarArachataSingle from './curds/GrammarArachata/single'
import GrammarKibhidhanasIndex from './curds/GrammarKibhidhanas/index'
import GrammarKibhidhanasSingle from './curds/GrammarKibhidhanas/single'
import GrammarUnadikappasIndex from './curds/GrammarUnadikappas/index'
import GrammarUnadikappasSingle from './curds/GrammarUnadikappas/single'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  modules: {
    Alert,
    I18NStore,
    BikkhuNidanasIndex,
    BikkhuNidanasSingle,
    BikkhuParajikasIndex,
    BikkhuParajikasSingle,
    BikkhuSamgadisesasIndex,
    BikkhuSamgadisesasSingle,
    BikkhuAniyataIndex,
    BikkhuAniyataSingle,
    BikkhuNissaggiyasIndex,
    BikkhuNissaggiyasSingle,
    BikkhuSuddhapacittiyasIndex,
    BikkhuSuddhapacittiyasSingle,
    BikkhuPatidesaniyasIndex,
    BikkhuPatidesaniyasSingle,
    BikkhuSekhiyasIndex,
    BikkhuSekhiyasSingle,
    BikkhuAdhikaranasIndex,
    BikkhuAdhikaranasSingle,
    BikkhuniNidanasIndex,
    BikkhuniNidanasSingle,
    BikkhuniParajikasIndex,
    BikkhuniParajikasSingle,
    BikkhuniSamgadisesasIndex,
    BikkhuniSamgadisesasSingle,
    BikkhuniNissaggiyasIndex,
    BikkhuniNissaggiyasSingle,
    BikkhuniSuddhapacittiyasIndex,
    BikkhuniSuddhapacittiyasSingle,
    BikkhuniPatidesaniyaniyasIndex,
    BikkhuniPatidesaniyaniyasSingle,
    BikkhuniSekhiyasIndex,
    BikkhuniSekhiyasSingle,
    BikkhuniAdhikaranasIndex,
    BikkhuniAdhikaranasSingle,
    BikkhuniAniyataIndex,
    BikkhuniAniyataSingle,

    // dhammapada & jataka
    YamakaVaggaVersesIndex,
    YamakaVaggaVersesSingle,
    AppamadaVaggasIndex,
    AppamadaVaggasSingle,
    CittaVaggasIndex,
    CittaVaggasSingle,
    PupphaVaggasIndex,
    PupphaVaggasSingle,
    BalaVaggasIndex,
    BalaVaggasSingle,
    PanditaVaggasIndex,
    PanditaVaggasSingle,
    ArahantaVaggasIndex,
    ArahantaVaggasSingle,
    SahassaVaggasIndex,
    SahassaVaggasSingle,
    DantaVaggasIndex,
    DantaVaggasSingle,
    JaraVaggasIndex,
    JaraVaggasSingle,
    AttaVaggasIndex,
    AttaVaggasSingle,
    LawkaVaggasIndex,
    LawkaVaggasSingle,
    BuddhaVaggasIndex,
    BuddhaVaggasSingle,
    SukhaVaaggasIndex,
    SukhaVaaggasSingle,
    PiyaVaggasIndex,
    PiyaVaggasSingle,
    KoddhaVaggasIndex,
    KoddhaVaggasSingle,
    MalaVaggasIndex,
    MalaVaggasSingle,
    DhammatthaVaggasIndex,
    DhammatthaVaggasSingle,
    MaggaVaggasIndex,
    MaggaVaggasSingle,
    PakinnakaVaggasIndex,
    PakinnakaVaggasSingle,
    NirayaVaggasIndex,
    NirayaVaggasSingle,
    PapaVaggasIndex,
    PapaVaggasSingle,
    NagaVaggasIndex,
    NagaVaggasSingle,
    TahnaVaggasIndex,
    TahnaVaggasSingle,
    BhikkhuVaggasIndex,
    BhikkhuVaggasSingle,
    BraminVaggasIndex,
    BraminVaggasSingle,
    ApandakaVaggasIndex,
    ApandakaVaggasSingle,
    SilaVaggasIndex,
    SilaVaggasSingle,
    KuringaVaggasIndex,
    KuringaVaggasSingle,
    KulavakaVaggasIndex,
    KulavakaVaggasSingle,
    AtthakamaVaggasIndex,
    AtthakamaVaggasSingle,
    AsisaVaggasIndex,
    AsisaVaggasSingle,
    ItthiVaggasIndex,
    ItthiVaggasSingle,
    VarunaVaggasIndex,
    VarunaVaggasSingle,
    ApayimaVaggasIndex,
    ApayimaVaggasSingle,
    LittaVaggasIndex,
    LittaVaggasSingle,
    ParosataVaggasIndex,
    ParosataVaggasSingle,
    HanciVaggasIndex,
    HanciVaggasSingle,
    KusanaliVaggasIndex,
    KusanaliVaggasSingle,
    AsampadanaVaggasIndex,
    AsampadanaVaggasSingle,
    KakamntakaVaggasIndex,
    KakamntakaVaggasSingle,
    DanlaVaggasIndex,
    DanlaVaggasSingle,
    SanthavaVaggasIndex,
    SanthavaVaggasSingle,
    KalayarnaVaggasIndex,
    KalayarnaVaggasSingle,
    AsadisaVaggasIndex,
    AsadisaVaggasSingle,
    RuhakaVaggasIndex,
    RuhakaVaggasSingle,
    NatamdanlaVaggasIndex,
    NatamdanlaVaggasSingle,
    BiranathambhaVaggasIndex,
    BiranathambhaVaggasSingle,
    KasavaVaggasIndex,
    KasavaVaggasSingle,
    UpahanaVaggasIndex,
    UpahanaVaggasSingle,
    SingalaVaggasIndex,
    SingalaVaggasSingle,
    SinkappaVaggasIndex,
    SinkappaVaggasSingle,
    PadumaVaggasIndex,
    PadumaVaggasSingle,
    UdapanaVaggasIndex,
    UdapanaVaggasSingle,
    AbbhantaraVaggasIndex,
    AbbhantaraVaggasSingle,
    KumbhaVaggasIndex,
    KumbhaVaggasSingle,
    KalingaVaggasIndex,
    KalingaVaggasSingle,
    PucimandaVaggasIndex,
    PucimandaVaggasSingle,
    KutidusakaVaggasIndex,
    KutidusakaVaggasSingle,
    KokilaVaggasIndex,
    KokilaVaggasSingle,
    CunakunalaVaggasIndex,
    CunakunalaVaggasSingle,
    ManikunthalaVaggasIndex,
    ManikunthalaVaggasSingle,
    VannarohaVaggasIndex,
    VannarohaVaggasSingle,
    AddhaVaggasIndex,
    AddhaVaggasSingle,
    AvariyaVaggasIndex,
    AvariyaVaggasSingle,
    KaraputtaVaggasIndex,
    KaraputtaVaggasSingle,
    KukkuVaggasIndex,
    KukkuVaggasSingle,
    GandaraVaggasIndex,
    GandaraVaggasSingle,
    JatakaAtthakaNipataIndex,
    JatakaAtthakaNipataSingle,
    JatakaNavakaNipataIndex,
    JatakaNavakaNipataSingle,
    JatakaDasakaNipataIndex,
    JatakaDasakaNipataSingle,
    JatakaEkadasakaNipataIndex,
    JatakaEkadasakaNipataSingle,
    JatakaDvadasaNipataIndex,
    JatakaDvadasaNipataSingle,
    JatakaTedasakaNipataIndex,
    JatakaTedasakaNipataSingle,
    JatakaPakinnakaNipataIndex,
    JatakaPakinnakaNipataSingle,
    JatakaVisatiNipataIndex,
    JatakaVisatiNipataSingle,
    JatakaTamsaNipataIndex,
    JatakaTamsaNipataSingle,
    JatakaCattalisaNipataIndex,
    JatakaCattalisaNipataSingle,
    JatakaPannasaNipataIndex,
    JatakaPannasaNipataSingle,
    JatakaSatthiNipataIndex,
    JatakaSatthiNipataSingle,
    JatakaSattatiNipataIndex,
    JatakaSattatiNipataSingle,
    JatakaAsitiNipataIndex,
    JatakaAsitiNipataSingle,
    JatakaMahaNipataIndex,
    JatakaMahaNipataSingle,
    AbhidhammaCittaLessonsIndex,
    AbhidhammaCittaLessonsSingle,
    AbhidhammaCetasikaLessonsIndex,
    AbhidhammaCetasikaLessonsSingle,
    AbhiddhammaPakimLessonsIndex,
    AbhiddhammaPakimLessonsSingle,
    AbhiddhammaVithiLessonsIndex,
    AbhiddhammaVithiLessonsSingle,
    AbhidhammaVithimoteLessonsIndex,
    AbhidhammaVithimoteLessonsSingle,
    AbhidhammaRupaLessonsIndex,
    AbhidhammaRupaLessonsSingle,
    AbhidhammaSamuciLessonsIndex,
    AbhidhammaSamuciLessonsSingle,
    AbhidhammaPassiLessonsIndex,
    AbhidhammaPassiLessonsSingle,
    AbhidhammaKamathanLessonsIndex,
    AbhidhammaKamathanLessonsSingle,
    GrammarChaptersIndex,
    GrammarChaptersSingle,
    GrammarSandisIndex,
    GrammarSandisSingle,
    GrammarNamasIndex,
    GrammarNamasSingle,
    GrammarKarakasIndex,
    GrammarKarakasSingle,
    GrammarSamasasIndex,
    GrammarSamasasSingle,
    GrammarTadisasIndex,
    GrammarTadisasSingle,
    GrammarArachataIndex,
    GrammarArachataSingle,
    GrammarKibhidhanasIndex,
    GrammarKibhidhanasSingle,
    GrammarUnadikappasIndex,
    GrammarUnadikappasSingle
  },
  strict: debug
})