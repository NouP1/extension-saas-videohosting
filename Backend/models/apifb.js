const redisClient = require('../services/redisClient');


const videos = [
 {
  email: 'smolen43ret@gmail.com',
  videos: [
      {
        id: '1',
        url: "https://video-sjc3-1.xx.fbcdn.net/v/t42.1790-2/464164468_1058712922223057_1723420798294766909_n.mp4?_nc_cat=100&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=oxPNkC_2MnsQ7kNvgHWgSsV&_nc_ht=video-sjc3-1.xx&_nc_gid=AKBg9LMYqGPNkwL3q_LdJKK&oh=00_AYAioLoemT6exsb42LdP53xeSRi8KlvmQeU8pOvG8kZ1sA&oe=671ED4D6",
        poster: "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.35426-6/464175243_1065483004794365_4096160315494354294_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=4ReX9IAtt2oQ7kNvgHeInng&_nc_ht=scontent-sjc3-1.xx&_nc_gid=AKBg9LMYqGPNkwL3q_LdJKK&oh=00_AYC_DtBrpHdNohj064paf4CaEAUVNOTiA4QFZOT3dNyJ8g&oe=671ED1D5",
      },
      {
        id: '2',
        url: "https://video-sjc3-1.xx.fbcdn.net/v/t42.1790-2/464164468_1058712922223057_1723420798294766909_n.mp4?_nc_cat=100&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=oxPNkC_2MnsQ7kNvgHWgSsV&_nc_ht=video-sjc3-1.xx&_nc_gid=AKBg9LMYqGPNkwL3q_LdJKK&oh=00_AYAioLoemT6exsb42LdP53xeSRi8KlvmQeU8pOvG8kZ1sA&oe=671ED4D6",
        poster: "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.35426-6/464175243_1065483004794365_4096160315494354294_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=4ReX9IAtt2oQ7kNvgHeInng&_nc_ht=scontent-sjc3-1.xx&_nc_gid=AKBg9LMYqGPNkwL3q_LdJKK&oh=00_AYC_DtBrpHdNohj064paf4CaEAUVNOTiA4QFZOT3dNyJ8g&oe=671ED1D5",
      },
      {
        id: '3',
        url: "https://assets.magicbrief.com/mbassets/nnj0po788ki0ltbxb49549rklgiu9vew.mp4",
        poster: "https://assets.magicbrief.com/mbassets/s80e24sdk2wupg2mwn9w70eaxuam6uz7.jpg",
      },
      {
        id: '4',
        url: "https://assets.magicbrief.com/mbassets/bauww0262gnhcl906408p8gyyod76142.mp46",
        poster: "https://assets.magicbrief.com/mbassets/pxbf661tpt0zyn14n8iowqpm3rf3arjr.jpg",
      },
      {
        id: '5',
        url: "https://assets.magicbrief.com/mbassets/juhlk43es0jdzrx682s3p457mlnixctv.mp4",
        poster: "https://assets.magicbrief.com/mbassets/idzc3ktn37ow7nxvbx2uicvqobjmia4i.jpg",
      },
      {
        id: '6',
        url: "https://assets.magicbrief.com/mbassets/v4r77vfs88k5wjeqx5inwuaan1ke0z6l.mp4#t=0",
        poster: "https://assets.magicbrief.com/mbassets/lpyobd2ibudbvbb4jjm11kknt24f42pq.jpg",
      },
      {
        id: '7',
        url: "https://assets.magicbrief.com/mbassets/ca5h2e4erxwur95dnk6q5rni4gtsrwds.mp4",
        poster: "https://assets.magicbrief.com/mbassets/u3up780n81nydsdeoueshbyz9dhbwh7h.jpg",
      },
      {
        id: '8',
        url: "https://assets.magicbrief.com/mbassets/zscaie3a4axyv5euprd9ik5yizrij0c8.mp4",
        poster: "https://assets.magicbrief.com/mbassets/5lkdticvwwf2co9vcfp05u19v3gws49z.jpg",
      },
      {
        id: '9',
        url: "https://video-sjc3-1.xx.fbcdn.net/v/t42.1790-2/464164468_1058712922223057_1723420798294766909_n.mp4?_nc_cat=100&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=oxPNkC_2MnsQ7kNvgHWgSsV&_nc_ht=video-sjc3-1.xx&_nc_gid=AKBg9LMYqGPNkwL3q_LdJKK&oh=00_AYAioLoemT6exsb42LdP53xeSRi8KlvmQeU8pOvG8kZ1sA&oe=671ED4D6",
        poster: "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.35426-6/464175243_1065483004794365_4096160315494354294_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=4ReX9IAtt2oQ7kNvgHeInng&_nc_ht=scontent-sjc3-1.xx&_nc_gid=AKBg9LMYqGPNkwL3q_LdJKK&oh=00_AYC_DtBrpHdNohj064paf4CaEAUVNOTiA4QFZOT3dNyJ8g&oe=671ED1D5",
      },
      {
        id: '10',
        url: "https://assets.magicbrief.com/mbassets/bauww0262gnhcl906408p8gyyod76142.mp46",
        poster: "https://assets.magicbrief.com/mbassets/pxbf661tpt0zyn14n8iowqpm3rf3arjr.jpg",
      },
      {
        id: '11',
        url: "https://assets.magicbrief.com/mbassets/v4r77vfs88k5wjeqx5inwuaan1ke0z6l.mp4#t=0",
        poster: "https://assets.magicbrief.com/mbassets/lpyobd2ibudbvbb4jjm11kknt24f42pq.jpg",
      },
      {
        id: '12',
        url: "https://video-sjc3-1.xx.fbcdn.net/v/t42.1790-2/464164468_1058712922223057_1723420798294766909_n.mp4?_nc_cat=100&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=oxPNkC_2MnsQ7kNvgHWgSsV&_nc_ht=video-sjc3-1.xx&_nc_gid=AKBg9LMYqGPNkwL3q_LdJKK&oh=00_AYAioLoemT6exsb42LdP53xeSRi8KlvmQeU8pOvG8kZ1sA&oe=671ED4D6",
        poster: "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.35426-6/464175243_1065483004794365_4096160315494354294_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=4ReX9IAtt2oQ7kNvgHeInng&_nc_ht=scontent-sjc3-1.xx&_nc_gid=AKBg9LMYqGPNkwL3q_LdJKK&oh=00_AYC_DtBrpHdNohj064paf4CaEAUVNOTiA4QFZOT3dNyJ8g&oe=671ED1D5",
      },
      {
        id: '13',
        url: "https://assets.magicbrief.com/mbassets/nnj0po788ki0ltbxb49549rklgiu9vew.mp4",
        poster: "https://assets.magicbrief.com/mbassets/s80e24sdk2wupg2mwn9w70eaxuam6uz7.jpg",
      },
      {
        id: '14',
        url: "https://assets.magicbrief.com/mbassets/v4r77vfs88k5wjeqx5inwuaan1ke0z6l.mp4#t=0",
        poster: "https://assets.magicbrief.com/mbassets/lpyobd2ibudbvbb4jjm11kknt24f42pq.jpg",
      },
      {
        id: '15',
        url: "https://video-sjc3-1.xx.fbcdn.net/v/t42.1790-2/464164468_1058712922223057_1723420798294766909_n.mp4?_nc_cat=100&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=oxPNkC_2MnsQ7kNvgHWgSsV&_nc_ht=video-sjc3-1.xx&_nc_gid=AKBg9LMYqGPNkwL3q_LdJKK&oh=00_AYAioLoemT6exsb42LdP53xeSRi8KlvmQeU8pOvG8kZ1sA&oe=671ED4D6",
        poster: "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.35426-6/464175243_1065483004794365_4096160315494354294_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=4ReX9IAtt2oQ7kNvgHeInng&_nc_ht=scontent-sjc3-1.xx&_nc_gid=AKBg9LMYqGPNkwL3q_LdJKK&oh=00_AYC_DtBrpHdNohj064paf4CaEAUVNOTiA4QFZOT3dNyJ8g&oe=671ED1D5",
      },
      // {
      //   url: "https://assets.magicbrief.com/mbassets/v4r77vfs88k5wjeqx5inwuaan1ke0z6l.mp4#t=0",
      //   poster: "https://assets.magicbrief.com/mbassets/lpyobd2ibudbvbb4jjm11kknt24f42pq.jpg",
      // },
      // {
      //   url: "https://video-sjc3-1.xx.fbcdn.net/v/t42.1790-2/464164468_1058712922223057_1723420798294766909_n.mp4?_nc_cat=100&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=oxPNkC_2MnsQ7kNvgHWgSsV&_nc_ht=video-sjc3-1.xx&_nc_gid=AKBg9LMYqGPNkwL3q_LdJKK&oh=00_AYAioLoemT6exsb42LdP53xeSRi8KlvmQeU8pOvG8kZ1sA&oe=671ED4D6",
      //   poster: "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.35426-6/464175243_1065483004794365_4096160315494354294_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=4ReX9IAtt2oQ7kNvgHeInng&_nc_ht=scontent-sjc3-1.xx&_nc_gid=AKBg9LMYqGPNkwL3q_LdJKK&oh=00_AYC_DtBrpHdNohj064paf4CaEAUVNOTiA4QFZOT3dNyJ8g&oe=671ED1D5",
      // },
      // {
      //   url: "https://assets.magicbrief.com/mbassets/nnj0po788ki0ltbxb49549rklgiu9vew.mp4",
      //   poster: "https://assets.magicbrief.com/mbassets/s80e24sdk2wupg2mwn9w70eaxuam6uz7.jpg",
      // },
      // {
      //   url: "https://video-sjc3-1.xx.fbcdn.net/v/t42.1790-2/464164468_1058712922223057_1723420798294766909_n.mp4?_nc_cat=100&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=oxPNkC_2MnsQ7kNvgHWgSsV&_nc_ht=video-sjc3-1.xx&_nc_gid=AKBg9LMYqGPNkwL3q_LdJKK&oh=00_AYAioLoemT6exsb42LdP53xeSRi8KlvmQeU8pOvG8kZ1sA&oe=671ED4D6",
      //   poster: "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.35426-6/464175243_1065483004794365_4096160315494354294_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=4ReX9IAtt2oQ7kNvgHeInng&_nc_ht=scontent-sjc3-1.xx&_nc_gid=AKBg9LMYqGPNkwL3q_LdJKK&oh=00_AYC_DtBrpHdNohj064paf4CaEAUVNOTiA4QFZOT3dNyJ8g&oe=671ED1D5",
      // },
      // {
      //   url: "https://assets.magicbrief.com/mbassets/juhlk43es0jdzrx682s3p457mlnixctv.mp4",
      //   poster: "https://assets.magicbrief.com/mbassets/idzc3ktn37ow7nxvbx2uicvqobjmia4i.jpg",
      // },

      // {
      //   url: "https://video-sjc3-1.xx.fbcdn.net/v/t42.1790-2/464164468_1058712922223057_1723420798294766909_n.mp4?_nc_cat=100&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=oxPNkC_2MnsQ7kNvgHWgSsV&_nc_ht=video-sjc3-1.xx&_nc_gid=AKBg9LMYqGPNkwL3q_LdJKK&oh=00_AYAioLoemT6exsb42LdP53xeSRi8KlvmQeU8pOvG8kZ1sA&oe=671ED4D6",
      //   poster: "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.35426-6/464175243_1065483004794365_4096160315494354294_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=4ReX9IAtt2oQ7kNvgHeInng&_nc_ht=scontent-sjc3-1.xx&_nc_gid=AKBg9LMYqGPNkwL3q_LdJKK&oh=00_AYC_DtBrpHdNohj064paf4CaEAUVNOTiA4QFZOT3dNyJ8g&oe=671ED1D5",
      // },
      // {
      //   url: "https://assets.magicbrief.com/mbassets/juhlk43es0jdzrx682s3p457mlnixctv.mp4",
      //   poster: "https://assets.magicbrief.com/mbassets/idzc3ktn37ow7nxvbx2uicvqobjmia4i.jpg",
      // },
      // {
      //   url: "https://assets.magicbrief.com/mbassets/juhlk43es0jdzrx682s3p457mlnixctv.mp4",
      //   poster: "https://assets.magicbrief.com/mbassets/idzc3ktn37ow7nxvbx2uicvqobjmia4i.jpg",
      // },
      //   {
      //   url: "https://assets.magicbrief.com/mbassets/juhlk43es0jdzrx682s3p457mlnixctv.mp4",
      //   poster: "https://assets.magicbrief.com/mbassets/idzc3ktn37ow7nxvbx2uicvqobjmia4i.jpg",
      // },
      // {
      //   url: "https://assets.magicbrief.com/mbassets/v4r77vfs88k5wjeqx5inwuaan1ke0z6l.mp4#t=0",
      //   poster: "https://assets.magicbrief.com/mbassets/lpyobd2ibudbvbb4jjm11kknt24f42pq.jpg",
      // },
      // {
      //   url: "https://assets.magicbrief.com/mbassets/ca5h2e4erxwur95dnk6q5rni4gtsrwds.mp4",
      //   poster: "https://assets.magicbrief.com/mbassets/u3up780n81nydsdeoueshbyz9dhbwh7h.jpg",
      // },
      // {
      //   url: "https://assets.magicbrief.com/mbassets/zscaie3a4axyv5euprd9ik5yizrij0c8.mp4",
      //   poster: "https://assets.magicbrief.com/mbassets/5lkdticvwwf2co9vcfp05u19v3gws49z.jpg",
      // },
      // {
      //   url: "https://video-sjc3-1.xx.fbcdn.net/v/t42.1790-2/464164468_1058712922223057_1723420798294766909_n.mp4?_nc_cat=100&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=oxPNkC_2MnsQ7kNvgHWgSsV&_nc_ht=video-sjc3-1.xx&_nc_gid=AKBg9LMYqGPNkwL3q_LdJKK&oh=00_AYAioLoemT6exsb42LdP53xeSRi8KlvmQeU8pOvG8kZ1sA&oe=671ED4D6",
      //   poster: "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.35426-6/464175243_1065483004794365_4096160315494354294_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=4ReX9IAtt2oQ7kNvgHeInng&_nc_ht=scontent-sjc3-1.xx&_nc_gid=AKBg9LMYqGPNkwL3q_LdJKK&oh=00_AYC_DtBrpHdNohj064paf4CaEAUVNOTiA4QFZOT3dNyJ8g&oe=671ED1D5",
      // },
      // {
      //   url: "https://assets.magicbrief.com/mbassets/nnj0po788ki0ltbxb49549rklgiu9vew.mp4",
      //   poster: "https://assets.magicbrief.com/mbassets/s80e24sdk2wupg2mwn9w70eaxuam6uz7.jpg",
      // },
      // {
      //   url: "https://assets.magicbrief.com/mbassets/v4r77vfs88k5wjeqx5inwuaan1ke0z6l.mp4#t=0",
      //   poster: "https://assets.magicbrief.com/mbassets/lpyobd2ibudbvbb4jjm11kknt24f42pq.jpg",
      // },
      // {
      //   url: "https://video-sjc3-1.xx.fbcdn.net/v/t42.1790-2/464164468_1058712922223057_1723420798294766909_n.mp4?_nc_cat=100&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=oxPNkC_2MnsQ7kNvgHWgSsV&_nc_ht=video-sjc3-1.xx&_nc_gid=AKBg9LMYqGPNkwL3q_LdJKK&oh=00_AYAioLoemT6exsb42LdP53xeSRi8KlvmQeU8pOvG8kZ1sA&oe=671ED4D6",
      //   poster: "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.35426-6/464175243_1065483004794365_4096160315494354294_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=4ReX9IAtt2oQ7kNvgHeInng&_nc_ht=scontent-sjc3-1.xx&_nc_gid=AKBg9LMYqGPNkwL3q_LdJKK&oh=00_AYC_DtBrpHdNohj064paf4CaEAUVNOTiA4QFZOT3dNyJ8g&oe=671ED1D5",
      // },
      // {
      //   url: "https://assets.magicbrief.com/mbassets/v4r77vfs88k5wjeqx5inwuaan1ke0z6l.mp4#t=0",
      //   poster: "https://assets.magicbrief.com/mbassets/lpyobd2ibudbvbb4jjm11kknt24f42pq.jpg",
      // },
      // {
      //   url: "https://video-sjc3-1.xx.fbcdn.net/v/t42.1790-2/464164468_1058712922223057_1723420798294766909_n.mp4?_nc_cat=100&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=oxPNkC_2MnsQ7kNvgHWgSsV&_nc_ht=video-sjc3-1.xx&_nc_gid=AKBg9LMYqGPNkwL3q_LdJKK&oh=00_AYAioLoemT6exsb42LdP53xeSRi8KlvmQeU8pOvG8kZ1sA&oe=671ED4D6",
      //   poster: "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.35426-6/464175243_1065483004794365_4096160315494354294_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=4ReX9IAtt2oQ7kNvgHeInng&_nc_ht=scontent-sjc3-1.xx&_nc_gid=AKBg9LMYqGPNkwL3q_LdJKK&oh=00_AYC_DtBrpHdNohj064paf4CaEAUVNOTiA4QFZOT3dNyJ8g&oe=671ED1D5",
      // },
      // {
      //   url: "https://assets.magicbrief.com/mbassets/nnj0po788ki0ltbxb49549rklgiu9vew.mp4",
      //   poster: "https://assets.magicbrief.com/mbassets/s80e24sdk2wupg2mwn9w70eaxuam6uz7.jpg",
      // },
      // {
      //   url: "https://video-sjc3-1.xx.fbcdn.net/v/t42.1790-2/464164468_1058712922223057_1723420798294766909_n.mp4?_nc_cat=100&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=oxPNkC_2MnsQ7kNvgHWgSsV&_nc_ht=video-sjc3-1.xx&_nc_gid=AKBg9LMYqGPNkwL3q_LdJKK&oh=00_AYAioLoemT6exsb42LdP53xeSRi8KlvmQeU8pOvG8kZ1sA&oe=671ED4D6",
      //   poster: "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.35426-6/464175243_1065483004794365_4096160315494354294_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=4ReX9IAtt2oQ7kNvgHeInng&_nc_ht=scontent-sjc3-1.xx&_nc_gid=AKBg9LMYqGPNkwL3q_LdJKK&oh=00_AYC_DtBrpHdNohj064paf4CaEAUVNOTiA4QFZOT3dNyJ8g&oe=671ED1D5",
      // },
      // {
      //   url: "https://assets.magicbrief.com/mbassets/juhlk43es0jdzrx682s3p457mlnixctv.mp4",
      //   poster: "https://assets.magicbrief.com/mbassets/idzc3ktn37ow7nxvbx2uicvqobjmia4i.jpg",
      // },
    ],
  }
  ]



module.exports = videos;