import { use } from 'passport';
import Roadmap from './roadmap.model';
import RoadmapService from './roadmap.service';
import UserPrompt from './userprompt.model';

class roadmapController {
  private roadmapService: RoadmapService;

  constructor(roadmapService: RoadmapService) {
    this.roadmapService = roadmapService;
  }

  async handleWebSocketConnection(ws: WebSocket, userPrompt: string) {
    try {
      const newUserPrompt = new UserPrompt({ title: userPrompt });
      await newUserPrompt.save();
      await this.roadmapService.create(userPrompt, (data) => {
        ws.send(JSON.stringify(data));
        const newRoadmap = new Roadmap(data);
        newRoadmap.save();
      });
    } catch (error) {
      ws.send(JSON.stringify({ error: 'Failed to process OpenAI stream' }));
    }
  }
}

export default roadmapController;