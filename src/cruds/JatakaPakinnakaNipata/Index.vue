<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header card-header-primary card-header-icon">
            <div class="card-icon">
              <i class="material-icons">assignment</i>
            </div>
            <h4 class="card-title">
              {{ $t('global.table') }}
              <strong>{{ $t('cruds.jatakaPakinnakaNipatum.title') }}</strong>
            </h4>
          </div>
          <div class="card-body">
            <router-link
              class="btn btn-primary"
              v-if="$can(xprops.permission_prefix + 'create')"
              :to="{ name: xprops.route + '.create' }"
            >
              <i class="material-icons">
                add
              </i>
              {{ $t('global.add') }}
            </router-link>
            <button
              type="button"
              class="btn btn-default"
              @click="fetchIndexData"
              :disabled="loading"
              :class="{ disabled: loading }"
            >
              <i class="material-icons" :class="{ 'fa-spin': loading }">
                refresh
              </i>
              {{ $t('global.refresh') }}
            </button>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-12">
                <div class="table-overlay" v-show="loading">
                  <div class="table-overlay-container">
                    <material-spinner></material-spinner>
                    <span>Loading...</span>
                  </div>
                </div>
                <datatable
                  :columns="columns"
                  :data="data"
                  :total="total"
                  :query="query"
                  :xprops="xprops"
                  :HeaderSettings="false"
                  :pageSizeOptions="[10, 25, 50, 100]"
                >
                  <global-search :query="query" class="pull-left" />
                  <header-settings :columns="columns" class="pull-right" />
                </datatable>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import DatatableActions from "../../components/Datatables/DatatableActions";
import TranslatedHeader from "../../components/Datatables/TranslatedHeader";
import HeaderSettings from "../../components/Datatables/HeaderSettings";
import GlobalSearch from "../../components/Datatables/GlobalSearch";
import MaterialSpinner from "../../components/MaterialSpinner";

export default {
  components: {
    GlobalSearch,
    HeaderSettings,
    MaterialSpinner,
  },
  data() {
    return {
      columns: [
        {
          title: 'ID',
          field: 'id',
          thComp: TranslatedHeader,
          sortable: true,
          colStyle: 'width: 100px;'
        },
        {
          title: 'ဇာတက',
          field: 'title',
          thComp: TranslatedHeader,
          sortable: true,
          colStyle: 'width: 150px;'
        },
         {
          title: 'ဂါထာ',
          field: 'verse',
          thComp: TranslatedHeader,
          sortable: true
        },
        {
          title: 'အဋ္ဌကထာအဖွင့်ကြည့်ရန်',
          thComp: TranslatedHeader,
          tdComp: DatatableActions,
          visible: true,
          thClass: 'text-right',
          tdClass: 'text-right td-actions',
          colStyle: 'width: 150px;'
        }
      ],
      query: { sort: 'id', order: 'asc', limit: 100, s: '' },
      xprops: {
        module: 'JatakaPakinnakaNipataIndex',
        route: 'jataka_pakinnaka_nipata',
        permission_prefix: 'jataka_pakinnaka_nipatum_'
      }
    }
  },
  beforeDestroy() {
    this.resetState()
  },
  computed: {
    ...mapGetters('JatakaPakinnakaNipataIndex', ['data', 'total', 'loading'])
  },
  watch: {
    query: {
      handler(query) {
        this.setQuery(query)
        this.fetchIndexData()
      },
      deep: true
    }
  },
  methods: {
    ...mapActions('JatakaPakinnakaNipataIndex', [
      'fetchIndexData',
      'setQuery',
      'resetState'
    ])
  }
}
</script>