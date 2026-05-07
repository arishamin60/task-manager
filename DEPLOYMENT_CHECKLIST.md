# ✅ Vercel Deployment Checklist

Use this checklist to ensure a smooth deployment to Vercel.

## Pre-Deployment (Local Testing)

- [ ] Extract the zip file
- [ ] Run `pnpm install` to install dependencies
- [ ] Run `pnpm dev` to test locally
- [ ] Test all features:
  - [ ] Add a new task
  - [ ] Edit a task (double-click)
  - [ ] Mark task as complete
  - [ ] Delete a task
  - [ ] Clear all completed tasks
  - [ ] Filter by All/Active/Completed
  - [ ] Refresh page (verify localStorage works)
- [ ] Check responsive design on mobile/tablet
- [ ] Run `pnpm build` to verify production build works
- [ ] Check for TypeScript errors: `pnpm check`

## GitHub Setup

- [ ] Create GitHub account (if not already done)
- [ ] Create new repository named "task-manager"
- [ ] Initialize git:
  ```bash
  git init
  git add .
  git commit -m "Initial commit: Task Manager"
  ```
- [ ] Add remote and push:
  ```bash
  git remote add origin https://github.com/YOUR_USERNAME/task-manager.git
  git branch -M main
  git push -u origin main
  ```
- [ ] Verify code is on GitHub

## Vercel Setup

- [ ] Create Vercel account (https://vercel.com)
- [ ] Connect GitHub account to Vercel
- [ ] Click "New Project"
- [ ] Import your "task-manager" repository
- [ ] Verify project settings:
  - [ ] Framework: Vite
  - [ ] Build Command: `pnpm install && pnpm build`
  - [ ] Output Directory: `dist/public`
  - [ ] Install Command: `pnpm install`
  - [ ] Root Directory: ./
- [ ] No environment variables needed (skip this step)
- [ ] Click "Deploy"

## Deployment Monitoring

- [ ] Wait for build to complete (2-3 minutes)
- [ ] Check build logs for errors
- [ ] Verify deployment status shows "Ready"
- [ ] Copy the deployment URL

## Post-Deployment Testing

- [ ] Visit your live URL
- [ ] Test all features on production:
  - [ ] Add a task
  - [ ] Edit a task
  - [ ] Mark as complete
  - [ ] Delete a task
  - [ ] Filter tasks
  - [ ] Clear completed
  - [ ] Refresh page (localStorage test)
- [ ] Test on mobile browser
- [ ] Test on different browser (Chrome, Firefox, Safari)
- [ ] Check browser console for errors
- [ ] Verify page loads quickly

## Troubleshooting

If deployment fails:

| Error | Solution |
|-------|----------|
| Build fails | Check build logs, ensure all dependencies are in package.json |
| Blank page | Verify `outputDirectory` is `dist/public` in vercel.json |
| 404 errors | Check rewrite rules in vercel.json |
| Slow build | First build takes longer, subsequent builds are faster |
| Tasks not saving | localStorage works in production - test in incognito mode |

## Custom Domain (Optional)

- [ ] Purchase domain (GoDaddy, Namecheap, etc.)
- [ ] Go to Vercel Dashboard → Project Settings → Domains
- [ ] Add your custom domain
- [ ] Update DNS records (follow Vercel's guide)
- [ ] Wait for SSL certificate (5-10 minutes)
- [ ] Verify custom domain works

## Continuous Deployment Setup

- [ ] Make a test change to code
- [ ] Commit and push to GitHub:
  ```bash
  git add .
  git commit -m "Test deployment"
  git push origin main
  ```
- [ ] Verify Vercel automatically triggers build
- [ ] Check deployment completes successfully
- [ ] Verify changes are live

## Performance Verification

- [ ] Page loads in under 3 seconds
- [ ] Lighthouse score check (optional):
  - [ ] Performance > 90
  - [ ] Accessibility > 90
  - [ ] Best Practices > 90
  - [ ] SEO > 90
- [ ] No console errors
- [ ] No broken links

## Security Check

- [ ] No sensitive data in code
- [ ] No API keys exposed
- [ ] HTTPS enabled (automatic with Vercel)
- [ ] No external tracking (optional)

## Documentation

- [ ] README.md is clear and up-to-date
- [ ] DEPLOYMENT_GUIDE.md is accurate
- [ ] QUICK_START.md is helpful
- [ ] Code comments are present where needed

## Final Sign-Off

- [ ] All tests passed
- [ ] All features working
- [ ] Performance acceptable
- [ ] Ready for production
- [ ] Share URL with team/users

---

## Deployment Details

| Item | Value |
|------|-------|
| **Project Name** | task-manager |
| **Repository** | https://github.com/YOUR_USERNAME/task-manager |
| **Vercel URL** | https://task-manager-XXXXX.vercel.app |
| **Custom Domain** | (if applicable) |
| **Deployment Date** | _________________ |
| **Deployed By** | _________________ |

---

## Notes

```
_________________________________________________________________

_________________________________________________________________

_________________________________________________________________
```

---

**Status**: ☐ Ready for Deployment | ☐ In Progress | ☐ Deployed

**Last Updated**: May 7, 2026
