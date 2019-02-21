package gitWebHooks

import (
	"log"
	"strings"

	"github.com/DanielRenne/GoCore/core/extensions"

	"github.com/DanielRenne/GoCore/core/gitWebHooks"
	"github.com/DanielRenne/GoCore/core/utils"
	"gopkg.in/go-playground/webhooks.v5/github"
)

type PushEventHook struct{}
type IssueEventHook struct{}
type IssueCommentEventHook struct{}
type ProjectCardEventHook struct{}
type ProjectEventHook struct{}
type ProjectColumnEventHook struct{}

func init() {
	gitWebHooks.RegisterHook(gitWebHooks.PUSH_TYPE, &PushEventHook{})
	gitWebHooks.RegisterHook(gitWebHooks.ISSUES, &IssueEventHook{})
	gitWebHooks.RegisterHook(gitWebHooks.ISSUE_COMMENT, &IssueCommentEventHook{})
	gitWebHooks.RegisterHook(gitWebHooks.PROJECT_CARD, &ProjectCardEventHook{})
	gitWebHooks.RegisterHook(gitWebHooks.PROJECT, &ProjectEventHook{})
	gitWebHooks.RegisterHook(gitWebHooks.PROJECT_COLUMN, &ProjectColumnEventHook{})
}

func (obj *ProjectCardEventHook) RunEvent(payload interface{}) {
	info, ok := payload.(github.ProjectCardPayload)
	if ok {
		utils.TalkDirtySlowly(info.Sender.Login + "  " + info.Action + " a project card " + info.ProjectCard.URL)
	}
}

func (obj *ProjectColumnEventHook) RunEvent(payload interface{}) {
	info, ok := payload.(github.ProjectColumnPayload)
	if ok {
		utils.TalkDirtySlowly(info.Sender.Login + "  " + info.Action + " a project card column with the name of " + info.ProjectColumn.Name)
	}
}

func (obj *ProjectEventHook) RunEvent(payload interface{}) {
	info, ok := payload.(github.ProjectPayload)
	if ok {
		utils.TalkDirtySlowly(info.Sender.Login + "  " + info.Action + " a project named " + info.Project.Name)
	}
}

func (obj *IssueCommentEventHook) RunEvent(payload interface{}) {
	info, ok := payload.(github.IssueCommentPayload)
	if ok {
		utils.TalkDirtySlowly(info.Sender.Login + " " + info.Action + " a comment and said " + info.Comment.Body + " on issue number " + extensions.Int64ToString(info.Issue.Number))
	}
}

func (obj *IssueEventHook) RunEvent(payload interface{}) {
	info, ok := payload.(github.IssuesPayload)
	if ok {
		//"assigned", "unassigned", "labeled", "unlabeled", "opened", "edited", "milestoned", "demilestoned", "closed", or "reopened".
		if info.Action == "opened" {

		}
		utils.TalkDirtySlowly(info.Sender.Login + " " + info.Action + " an issue ")
	}
}

func (obj *PushEventHook) RunEvent(payload interface{}) {
	info, ok := payload.(github.PushPayload)
	if ok {
		utils.TalkDirtySlowly(strings.Replace(info.Pusher.Name, "", "", -1) + " pushed ")
		for _, commit := range info.Commits {
			if strings.Index(commit.Message, "Merge") == -1 {
				utils.TalkDirtySlowly(commit.Message)
				if strings.Index(commit.Message, "#velocitybug") != -1 {
					message := strings.Replace(strings.Replace(commit.Message, "#velocitybug ", " ", -1), "#velocitybug", "", -1)
					pieces := strings.Split(message, "\n")
					description := ""
					if len(pieces) > 1 {
						for i := 1; i < len(pieces); i++ {
							description += "\n" + pieces[i]
						}
					}
					messageTitle := pieces[0]
					log.Println("desc: " + description + "\n\ndave: " + messageTitle)
				}
			}
		}
	}
}
