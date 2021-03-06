package posts

import (
	"encoding/json"

	"github.com/davidrenne/goCoreCreateAppGeneration/models/v1/model"
)

type TimeZoneVM struct {
	TimeZones []model.Timezone `json:"TimeZones"`
}

func (self *TimeZoneVM) Parse(data string) {
	json.Unmarshal([]byte(data), &self)
}
