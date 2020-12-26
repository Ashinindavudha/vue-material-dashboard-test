<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header card-header-primary card-header-icon">
            <div class="card-icon">
              <i class="material-icons">remove_red_eye</i>
            </div>
            <h4 class="card-title">
              {{ ('view') }}
              <strong>{{ ('BikkhuNidana Detail') }}</strong>
            </h4>
          </div>
          <div class="card-body">
            <back-button></back-button>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-12">
                <div class="table-responsive">
                  <div class="table">
                    <tbody>
                      <tr>
                        <td class="text-primary">
                          {{ ('Id') }}
                        </td>
                        <td>
                          {{ entry.id }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ ('Title') }}
                        </td>
                        <td>
                          {{ entry.title }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ ('Description') }}
                        </td>
                        <td>
                          <ckeditor
                            :editor="editor"
                            :value="entry.description"
                            disabled
                          >
                          </ckeditor>
                          <!-- {{ entry.description }} -->
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ ('Nissaya') }}
                        </td>
                        <td>
                          <ckeditor
                            :editor="editor"
                            :value="entry.nissaya"
                            disabled
                          >
                          </ckeditor>
                          <!-- {{ entry.nissaya }} -->
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ ('Definition') }}
                        </td>
                        <td>
                          <ckeditor
                            :editor="editor"
                            :value="entry.definition"
                            disabled
                          >
                          </ckeditor>
                          <!-- {{ entry.definition }} -->
                        </td>
                      </tr>
                      <!-- <tr>
                        <td class="text-primary">
                          {{ ('Englis_translate') }}
                        </td>
                        <td>
                          <ckeditor
                            :editor="editor"
                            :value="entry.english_translate"
                            disabled
                          >
                          </ckeditor> -->
                          <!-- {{ entry.english_translate }} 
                        </td> 
                      </tr> -->
                      <tr>
                        <td class="text-primary">
                          {{
                            ('Myanmar_translate')
                          }}
                        </td>
                        <td>
                          <ckeditor
                            :editor="editor"
                            :value="entry.myanmar_translate"
                            disabled
                          >
                          </ckeditor>
                          <!-- {{ entry.myanmar_translate }} -->
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ ('Commentary') }}
                        </td>
                        <td>
                          <ckeditor

                            :editor="editor"
                            :value="entry.commentary"
                            disabled
                          >
                          </ckeditor>
                          <!-- {{ entry.commentary }} -->
                        </td>
                      </tr>
                    </tbody>
                  </div>
                </div>
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
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import BackButton from '../../components/BackButton.vue'
export default {
  components: {
    //ClassicEditor
    BackButton
  },
  data() {
    return {
      editor: ClassicEditor
    }
  },
  beforeDestroy() {
    this.resetState()
  },
  computed: {
    ...mapGetters('BikkhuNidanasSingle', ['entry'])
  },
  watch: {
    '$route.params.id': {
      immediate: true,
      handler() {
        this.resetState()
        this.fetchShowData(this.$route.params.id)
      }
    }
  },
  methods: {
    ...mapActions('BikkhuNidanasSingle', ['fetchShowData', 'resetState'])
  }
}
</script>