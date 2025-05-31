export function openMail (e, mail) {
    e.preventDefault()
    window.open(`https://mail.google.com/mail/?view=cm&to=${mail}&su=_`, '_blank')
}

export function openSocial (link) {
    window.open(link)
}

export function navigate (id) {
    window.location.href = id
} 