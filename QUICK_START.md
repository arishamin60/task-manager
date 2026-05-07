# 🚀 Quick Start - Deploy to Vercel in 5 Minutes

## Prerequisites
- GitHub account
- Vercel account (free at https://vercel.com)

## Step 1: Push to GitHub (2 minutes)

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Task Manager - Ready for deployment"

# Create new repository at https://github.com/new
# Then push:
git remote add origin https://github.com/YOUR_USERNAME/task-manager.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel (2 minutes)

1. Go to https://vercel.com
2. Click "New Project"
3. Click "Import Git Repository"
4. Select your `task-manager` repository
5. Click "Import"

## Step 3: Configure (1 minute)

**Framework Preset**: Vite
**Build Command**: `pnpm install && pnpm build`
**Output Directory**: `dist/public`
**Install Command**: `pnpm install`

Click "Deploy" and wait 2-3 minutes!

## ✅ Done!

Your app is now live at: `https://task-manager-XXXXX.vercel.app`

---

## Testing Your Deployment

✅ Add a task
✅ Mark as complete
✅ Edit a task
✅ Delete a task
✅ Filter tasks
✅ Refresh page (check localStorage works)

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Build fails | Check build logs in Vercel dashboard |
| Blank page | Verify `outputDirectory` is `dist/public` |
| Tasks not saving | localStorage works in production browsers |
| Slow deployment | First deploy takes 3-5 min, next ones are faster |

## Next Deployments

After making changes:
```bash
git add .
git commit -m "Your changes"
git push origin main
```

Vercel automatically redeploys! 🎉

---

For detailed guide, see `DEPLOYMENT_GUIDE.md`
