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
              {{ $t('global.view') }}
              <strong>{{
                $t('cruds.abhidhammaSamuciLesson.title_singular')
              }}</strong>
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
                          {{ $t('cruds.abhidhammaSamuciLesson.fields.id') }}
                        </td>
                        <td>
                          {{ entry.id }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.abhidhammaSamuciLesson.fields.title') }}
                        </td>
                        <td>
                          {{ entry.title }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{
                            $t(
                              'cruds.abhidhammaSamuciLesson.fields.description'
                            )
                          }}
                        </td>
                        <td>
                          <ckeditor
                            :editor="editor"
                            :value="entry.description"
                            disabled
                          >
                          </ckeditor>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{
                            $t('cruds.abhidhammaSamuciLesson.fields.nissaya')
                          }}
                        </td>
                        <td>
                          <ckeditor
                            :editor="editor"
                            :value="entry.nissaya"
                            disabled
                          >
                          </ckeditor>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{
                            $t('cruds.abhidhammaSamuciLesson.fields.definition')
                          }}
                        </td>
                        <td>
                          <ckeditor
                            :editor="editor"
                            :value="entry.definition"
                            disabled
                          >
                          </ckeditor>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{
                            $t('cruds.abhidhammaSamuciLesson.fields.tika_open')
                          }}
                        </td>
                        <td>
                          <ckeditor
                            :editor="editor"
                            :value="entry.tika_open"
                            disabled
                          >
                          </ckeditor>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{
                            $t(
                              'cruds.abhidhammaSamuciLesson.fields.english_translate'
                            )
                          }}
                        </td>
                        <td>
                          <ckeditor
                            :editor="editor"
                            :value="entry.english_translate"
                            disabled
                          >
                          </ckeditor>
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
    //ClassicEditor,
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
    ...mapGetters('AbhidhammaSamuciLessonsSingle', ['entry'])
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
    ...mapActions('AbhidhammaSamuciLessonsSingle', [
      'fetchShowData',
      'resetState'
    ])
  }
}
</script>
