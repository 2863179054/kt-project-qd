import request from '@/utils/request'

const api_name = '/admin/vod/teacher'

export default {
  //讲师列表
  pageList(page, limit, searchObj) {
    return request({
      url: `${api_name}/findQuery/${page}/${limit}`,
      method: `post`,
      data: searchObj
    })
  },
  //根据id删除
  removeTeacherId(id) {
    return request({
      url: `${api_name}/remove/${id}`,
      method: `delete`
    })
  },
  saveTeacher(teacher) {
    return request({
      url: `${api_name}/saveTeacher`,
      method: `post`,
      data: teacher
    })
  },
  getTeacherById(id) {
    return request({
      url: `${api_name}/getTeacher/${id}`,
      method: `get`
    })
  },
  updateTeacher(teacher) {
    return request({
      url: `${api_name}/updateTeacher`,
      method: `put`,
      data: teacher
    })
  },

}