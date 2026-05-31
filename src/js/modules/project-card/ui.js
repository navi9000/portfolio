export const PROJECT_CARD_TEMPLATE = `
<article class="project-card">
    <img src="{{src}}" alt="{{alt}}" />
    <div class="project-body">
        <h3>{{title}}</h3>
        <p>{{description}}</p>
        <a href="{{code_link}}" target="_blank" rel="noreferrer">View code</a>
        {{project_link_slot}}
    </div>
</article>
`

export const PROJECT_LINK_TEMPLATE = `
<div>
    <a href="{{project_link}}" target="_blank" rel="noreferrer">View project</a>
</div>
`
